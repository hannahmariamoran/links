// This allows us to process/render the descriptions, which are in Markdown!
// More about Markdown: https://en.wikipedia.org/wiki/Markdown
let markdownIt = document.createElement('script')
markdownIt.src = 'https://cdn.jsdelivr.net/npm/markdown-it@14.0.0/dist/markdown-it.min.js'
document.head.appendChild(markdownIt)

let channelSlug = 'the-jazz-tapestry' // The “slug” is just the end of the URL

// First, let’s lay out some *functions*, starting with our basic metadata:
let placeChannelInfo = (data) => {
	// Target some elements in your HTML:
	let channelTitle = document.getElementById('channel-title')
	let channelDescription = document.getElementById('channel-description')
	// let channelCount = document.getElementById('channel-count')
	let channelLink = document.getElementById('channel-link')

	// Then set their content/attributes to our data:
	channelTitle.innerHTML = data.title
	channelDescription.innerHTML = window.markdownit().render(data.metadata.description) // Converts Markdown → HTML
	// channelCount.innerHTML = data.length
	channelLink.href = `https://www.are.na/channel/${channelSlug}`
}



// Function for link blocks
let renderLinkBlock = (block) => {
	// To start, a shared `ul` where we’ll insert all our blocks
	let channelBlocks = document.getElementById('link-blocks')


	// Links!
	if (block.class == 'Link') {
		let linkItem =
			`
			<li>
				<div class="block">
				<a href="${ block.source.url }" class=" block--link>
					<picture>
						<source media="(max-width: 428px)" srcset="${ block.image.thumb.url }">
						<source media="(max-width: 640px)" srcset="${ block.image.large.url }">
						<img src="${ block.image.original.url }">
					</picture>
				</a>
				</div>
			</li>
			`
		channelBlocks.insertAdjacentHTML('beforeend', linkItem)
	}
}

// Function for image blocks
let renderImageBlock = (block) => {
	// To start, a shared `ul` where we’ll insert all our blocks
	let channelBlocks = document.getElementById('image-blocks')


	// Images!
	if (block.class == 'Image') { 
		let imageItem =
			`
			<li class="block image-lightbox">
				<figure class="block block--image">
				<img src="${block.image.large.url}" alt="${block.title} by ${block.user.full-name}">
				</figure>
			</li>
			`
		channelBlocks.insertAdjacentHTML('beforeend', imageItem)
	}
}

// Function for text blocks
let renderTextBlock = (block) => {
	// To start, a shared `ul` where we’ll insert all our blocks
	let channelBlocks = document.getElementById('text-blocks')


	// Text!
	if (block.class == 'Text') {
		let textItem =
			`
			<li>
				<div class="block">
				<blockquote class="block--text">
					${block.content_html}
				</blockquote>
				</div>
			</li>
			`
		channelBlocks.insertAdjacentHTML('beforeend', textItem)
	}
}
// Function for video blocks
let renderVideoBlock = (block) => {
	// To start, a shared `ul` where we’ll insert all our blocks
	let channelBlocks = document.getElementById('video-blocks')


		// Uploaded (not linked) media…
		if (block.class == 'Attachment') {
			let attachment = block.attachment.content_type // Save us some repetition
	
			// Uploaded videos!
			if (attachment.includes('video')) {
				// …still up to you, but we’ll give you the `video` element:
				let videoItem =
					`
					<li class="block block--video">
						<video controls src="${ block.attachment.url }"></video>
					</li>
					`
				channelBlocks.insertAdjacentHTML('beforeend', videoItem)
				// More on video, like the `autoplay` attribute:
				// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
			}
		}
		// Linked media…
		if (block.class == 'Media') {
			let embed = block.embed.type
			
			// Linked video!
			if (embed.includes('video')) {
				let linkedVideoItem =
					`
					<li>
						<div class="block block--videolinked">
							<div>${ block.embed.html }</div>
						</div>
					</li>
					`
				channelBlocks.insertAdjacentHTML('beforeend', linkedVideoItem)
			}
		}
}
// Function for uploaded pdf blocks
let renderPDFBlock = (block) => {
	// To start, a shared `ul` where we’ll insert all our blocks
	let channelBlocks = document.getElementById('pdf-blocks')


		// Uploaded (not linked) media…
		if (block.class == 'Attachment') {
			let attachment = block.attachment.content_type // Save us some repetition
	
			// Uploaded PDFs!
			if (attachment.includes('pdf')) {
				
				let pdfItem =
					`
					<li>
						<div class="block block--pdf">
							<a href="${block.attachment.url}">
								<figure>
									<img src="${block.image.large.url}" alt="${block.title}">
								</figure>
							</a>
						</div>
					</li>
					`
				channelBlocks.insertAdjacentHTML('beforeend', pdfItem);
			}
		}
}
// Function for audio blocks
let renderAudioBlock = (block) => {
	// To start, a shared `ul` where we’ll insert all our blocks
	let channelBlocks = document.getElementById('audio-blocks')


		// Uploaded (not linked) media…
		if (block.class == 'Attachment') {
			let attachment = block.attachment.content_type // Save us some repetition
	
			// Uploaded audio!
			if (attachment.includes('audio')) {
				// …still up to you, but here’s an `audio` element:
				console.log(block)
				let audioItem = 
					`
					<li>
					<div class="block block--audio">
						<div class="audio-player"><audio controls src="${ block.attachment.url }"></audio></div>
					</div>
					</li>
					`
				channelBlocks.insertAdjacentHTML('beforeend', audioItem)
			}
		}
		// Linked media…
		if (block.class == 'Media') {
			let embed = block.embed.type
			
			// Linked audio!
			if (embed.includes('rich')) {
				let linkedAudioItem =
					`
					<li>
					<div class="block">
					<div class="block--audiolinked">
						<div class="spotify-player">${ block.embed.html }</div>
					</div>
					</div>
				</li>
					`
				channelBlocks.insertAdjacentHTML('beforeend', linkedAudioItem)
			}
		}
}

// Now that we have said what we can do, go get the data:
fetch(`https://api.are.na/v2/channels/${channelSlug}?per=100`, { cache: 'no-store' })
	.then((response) => response.json()) // Return it as JSON data
	.then((data) => { // Do stuff with the data
		console.log(data) // Always good to check your response!
		placeChannelInfo(data) // Pass the data to the first function

		// Loop through the `contents` array (list), backwards. Are.na returns them in reverse!
		data.contents.reverse().forEach((block) => {
			// console.log(block) // The data for a single block
			renderLinkBlock(block) // Pass the single block data to the render function
		})
		data.contents.reverse().forEach((block) => {
			// console.log(block) // The data for a single block
			renderImageBlock(block) // Pass the single block data to the render function
		})
		data.contents.reverse().forEach((block) => {
			// console.log(block) // The data for a single block
			renderTextBlock(block) // Pass the single block data to the render function
		})
		data.contents.reverse().forEach((block) => {
			// console.log(block) // The data for a single block
			renderVideoBlock(block) // Pass the single block data to the render function
		})
		data.contents.reverse().forEach((block) => {
			// console.log(block) // The data for a single block
			renderPDFBlock(block) // Pass the single block data to the render function
		})
		data.contents.reverse().forEach((block) => {
			// console.log(block) // The data for a single block
			renderAudioBlock(block) // Pass the single block data to the render function
		})
		
	})
	

// –––––––––– Content Title fading in on scroll up (demo from class) ––––––––––
let highlightClass = 'highlight' 
let highlightBlocks = document.querySelectorAll('h6') 

highlightBlocks.forEach((highlightBlock) => {
	let sectionObserver = new IntersectionObserver((entries) => {
		let [entry] = entries

		if (entry.isIntersecting) {
			highlightBlock.classList.add(highlightClass)
		} else {
			highlightBlock.classList.remove(highlightClass)
		}
	})
		sectionObserver.observe(highlightBlock) 
})

