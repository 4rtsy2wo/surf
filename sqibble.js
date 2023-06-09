// exp_sQ.js
M = [
	'𓃥',
	'𓃰',
	'𓃯',
	'𓃭',
	'𓃸',
	'𓃩',
	'𓃶',
	'𓃻',
	'𓃹',
	'𓆈',
	'𓆉',
	'𓆌',
	'𓆏',
	'𓆗',
	'𓆙',
	'𓆣',
	'𓆤',
	'𓆧',
	'𓆨',
	'𓆛',
	'𓆜',
	'𓆝',
	'𓆞',
	'𓆡',
	'𓅃',
	'𓅐',
	'𓅓',
	'𓅘',
	'𓅙',
	'𓅜',
	'𓅯',
	'𓅨'
]
ej = ['🎭', '🧬']
S = window.S
//helpers double X( for now
acdc = (p, t, a) => {
	const e = document.createElementNS('http://www.w3.org/2000/svg', t)
	for (let k in a) e.setAttribute(k, a[k])
	p.append(e)
	return e
}
u = (i) => {
	return document.getElementById(i)
}
m = (s, e, d, mi, ma, h) => {
	ra = h ? 15 : 255
	return V[S].match(d ? /../g : /./g)
		.slice(s, e)
		.map((h) => (parseInt(h, 16) / ra) * (ma - mi) + mi)
}

window.updateData = () => {
	const parentGroup = u('mG')
	// Remove the existing 'dG' group if it exists
	const dG = u('dG')
	if (dG) {
		dG.parentNode.removeChild(dG)
	}
	// Create a new 'dG' group
	const newdG = document.createElementNS('http://www.w3.org/2000/svg', 'g')
	newdG.setAttribute('id', 'dG')
	// Insert 'dG' group before 'fG' group in 'mG' group
	const fG = u('fG')
	parentGroup.insertBefore(newdG, fG)
	// Create and append the groups in the desired order
	acdc(newdG, 'g', { id: 'sG' })
	acdc(newdG, 'g', { id: 'oG' })
	acdc(newdG, 'g', { id: 'nG' })
	acdc(newdG, 'g', { id: 'lG' })
	// Hide the "m" element if everything is loaded
	u('m').style.display = 'none'
	// Set the background
	_S()
	// Set the gradient metadata
	_G(FD[5])
	// Set the patterns
	_P()
	// Set the orbs
	_O()
	// Set the badges metadata
	_B(FD[1])
	// Set the list metadata
	_L(FD[3][0], FD[3][1])
	// Add emoji menu to the menu
	_E()
	// Add greybits menu to the menu
	_GB()
}

window._H = () => {
	updateData() // Update the SVG elements
	_eventHandlers() // Attach the event listeners
}

// event listeners
window._eventHandlers = () => {
	const elements = ['E0', 'E1', 'A0', 'A1', 'A2', 'T']
	elements.forEach((elementId) => {
		const element = u(elementId)
		const clone = element.cloneNode(true)
		element.parentNode.replaceChild(clone, element)
	})
	// Open profile gallery
	u('E0').addEventListener('click', () => {
		window.open('http://localhost:5173/portals/' + FD[0], '_blank')
	})
	// Toggle the display of the "m" element when "E1" is clicked
	u('E1').addEventListener('click', () => {
		u('m').style.display = u('m').style.display === 'block' ? 'none' : 'block'
		console.log('Toggle NFT DISPLAY')
	})
	// Toggle the visibility of all images in the "nG" element when "A0" is clicked
	u('A0').addEventListener('click', () => {
		let images = document.querySelectorAll('#nG image')
		images.forEach((image) => {
		image.style.visibility = image.style.visibility === 'visible' ? 'hidden' : 'visible'
		console.log('Toggle NFT DISPLAY')
		})
	})
	// Toggle the visibility of the image in the "sG" element when "A1" is clicked
	u('A1').addEventListener('click', () => {
		let image = document.querySelector("#sG image");
		image.style.visibility =
		image.style.visibility === "visible" ? "hidden" : "visible";
		console.log('Toggle BG DISPLAY')
	})
	// Increment the global variable S and log it when "A2" is clicked
	u('A2').addEventListener('click', () => {
		document.getElementById('my-drawer').checked = true
		console.log('Toggle SparkMENU')
	})
	u('T').addEventListener('click', () => {
		window.S = (S + 1) % V.length
		window.I = (I + 1) % CH.length

		// Set the new V[S] value and update variables
		P = m(0, 18, 1, 100, 924, 0)
		SI = m(18, 24, 1, 150, 600, 0)
		SW = m(25, 30, 0, 5, 25, 1)
		D = m(31, 39, 0, 5, 30, 1)
		GS = CH[I].match(/./g)
			.slice(56, 64)
			.map((h) => '#' + h.repeat(3))
		C = CH[I].match(/(.{6})/g)
		// Call the updateData() function with the new variables
		window._H()
	})
}

// Function to remove existing groups
function removeDesign() {
	const dG = u('dG')
	if (dG) {
		dG.parentNode.removeChild(dG)
	}
}

// create patterns
window._P = () => {
	// Add the patterns to the "pG" element
	document.getElementById('pG').innerHTML += `
    <pattern id="Diagonal" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="100%" height="100%" fill="#${C[13]}" />
      <path d="M0 20 L40 20" stroke="#${C[14]}" stroke-width="5" />
    </pattern>
    <pattern id="Polkadot" width="40" height="40" patternUnits="userSpaceOnUse">
      <rect width="100%" height="100%" fill="#${C[13]}" />
      <circle cx="20" cy="20" r="15" fill="#${C[14]}" />
    </pattern>
  `
}

// set frame gradient
window._G = (frameType) => {
	let stop1, stop2
	// Determine the gradient stops based on the frame type
	switch (frameType) {
		case 'Unicolor':
			stop1 = `#${C[1]}`
			stop2 = `#${C[1]}`
			break
		case 'Dualcolor':
			stop1 = `#${C[1]}`
			stop2 = `#${C[2]}`
			break
		case 'DOWNTransparent':
			stop1 = `#${C[1]}`
			stop2 = '#0000'
			break
		case 'UPTransparent':
			stop1 = `#0000`
			stop2 = `#${C[1]}`
			break
		case 'BG':
			stop1 = `#${C[0]}`
			stop2 = `#${C[0]}`
			break
		case 'Frameless':
			stop1 = `#0000`
			stop2 = `#0000`
			break
		default:
			stop1 = `#${C[1]}`
			stop2 = `#${C[1]}`
			break
	}

	// Add the gradient to the "gG" element
	document.getElementById('gG').innerHTML += `
    <linearGradient id="g0" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${stop1}" />
      <stop offset="100%" stop-color="${stop2}" />
    </linearGradient>
  `
	// set the frame stroke if all ok
	u('F').style.stroke = 'url(#g0)'
}

// create background setting
window._S = () => {
	const svgGroup = u('sG')
	// Add a background rectangle with color C[0]
	acdc(svgGroup, 'rect', {
		id: 'B0',
		fill: '#' + C[0],
		width: '100%',
		height: '100%'
	})
	// Add a background image
	acdc(svgGroup, 'image', {
		id: 'B1',
		href: BI,
		width: '100%',
		height: '100%',
		visibility: 'hidden'
	})
	// Add a rectangle with a pattern fill and a mask
	acdc(svgGroup, 'rect', {
		id: 'B2',
		fill: `url(#${FD[4]})`,
		mask: 'url(#M)',
		width: '100%',
		height: '100%'
	})
}

// create emoji nav
window._E = () => {
	const emojiGroup = acdc(u('fG'), 'g', {
		transform: 'translate(995, 25)'
	})

	ej.forEach((emoji, i) => {
		const emojiElement = acdc(emojiGroup, 'text', {
			id: `E${i}`,
			y: i * 990,
			style: 'font-size: 20px; cursor: pointer'
		})
		emojiElement.textContent = emoji
	})
}

// create greybits
window._GB = () => {
	const greybitsGroup = acdc(u('fG'), 'g', {
		id: 'g',
		transform: 'translate(345)'
	})

	for (let i = 0; i < 8; i++) {
		acdc(greybitsGroup, 'rect', {
			id: `A${i}`,
			x: i * 23,
			y: 2,
			width: 20,
			height: 20,
			fill: GS[i],
			stroke: 'black'
		})
	}
}

// create orbs
window._O = () => {
	const mask = acdc(u('oG'), 'mask', { id: 'M' })
	const outerGroup = acdc(mask, 'g', { id: '01' })
	const middleGroup = acdc(outerGroup, 'g', { id: '02' })
	const innerGroup = acdc(middleGroup, 'g', { id: '03' })

	const circleData = [
		{
			id: 'O0',
			cx: P[12],
			cy: P[13],
			r: SI[5],
			sw: SW[2] * 3.14,
			dur: D[7]
		},
		{
			id: 'O1',
			cx: P[14],
			cy: P[13],
			r: SI[5] * 0.42,
			sw: SW[3] * 0.42,
			dur: D[8],
			parent: middleGroup
		},
		{
			id: 'O2',
			cx: P[15],
			cy: P[13],
			r: SI[5] * 0.21,
			sw: SW[4] * 6.9,
			dur: D[9],
			parent: innerGroup
		}
	]

	for (const data of circleData) {
		const circle = acdc(data.parent || outerGroup, 'circle', {
			id: data.id,
			cx: data.cx,
			cy: data.cy,
			r: data.r,
			stroke: '#fff',
			'stroke-width': data.sw
		})

		acdc(circle, 'animateTransform', {
			attributeName: 'transform',
			type: 'rotate',
			from: `0 ${data.cy} ${data.cx}`,
			to: `360 ${data.cy} ${data.cx}`,
			dur: data.dur,
			repeatCount: 'indefinite'
		})
	}
}
// create badges
window._B = (a) => {
	const sizeBoundary = 200
	let pIndex = 0 // Separated variable for P[]

	for (let i = 0; i < a; i++) {
		const x = P[pIndex] - sizeBoundary
		const y = P[pIndex + 1] - sizeBoundary
		pIndex += 2 // increment by 2 for each iteration

		const badgeGroup = acdc(u('nG'), 'g', {
			id: `G${i}`,
			class: 'b',
			transform: `translate(${x} ${y})`
		})

		acdc(badgeGroup, 'rect', {
			id: `N${i}`,
			width: SI[i],
			height: SI[i],
			fill: '#' + C[i + 3],
			style: `transform-origin: 50% 50%;rx: 10;stroke-width: 5;stroke: #${
				C[i + 8]
			}; transform:rotate(${FD[2][i]}deg); animation-duration:${D[i]}s`
		})

		if (i < LI.length) {
			acdc(badgeGroup, 'image', {
				id: `I${i}`,
				x: SI[i] * 0.05,
				y: SI[i] * 0.05,
				width: SI[i] * 0.9,
				height: SI[i] * 0.9,
				href: LI[i],
				style: `transform-origin: 50% 50%;rx: 20;stroke-width: 5;transform:rotate(${FD[2][i]}deg); animation-duration:${D[i]}s; visibility:visible`
			})
		}
	}
}

// create lines
window._L = (v, h) => {
	for (let i = 0; i < v; i++) {
		const strokeWidth = i === 0 ? SW[0] : SW[0] * 0.25
		const position = P[10] - strokeWidth * 0.5

		const line = acdc(u('lG'), 'line', {
			id: `LV${i}`,
			x1: position,
			y1: '0',
			x2: position,
			y2: '1024',
			style: `stroke: ${GS[i]}; stroke-width: ${strokeWidth};`
		})

		acdc(line, 'animate', {
			attributeName: 'y2',
			from: '0',
			to: '1024',
			dur: `${D[5] / 15}`
		})
	}

	for (let i = 0; i < h; i++) {
		const strokeWidth = i === 0 ? SW[1] : SW[1] * 0.25
		const position = P[11] - strokeWidth * 0.5

		const line = acdc(u('lG'), 'line', {
			id: `LH${i}`,
			x1: '0',
			y1: position,
			x2: '1024',
			y2: position,
			style: `stroke: ${GS[2 + i]}; stroke-width: ${strokeWidth};`
		})

		acdc(line, 'animate', {
			attributeName: 'x2',
			from: '0',
			to: '1024',
			dur: `${D[v > 6 ? 6 : 1] / 15}`
		})
	}
}
