const antmessage = document.createElement('div')

function Message() {
	antmessage.classList.add('vanilla-antd-message')
	document.body.appendChild(antmessage)
}

Message.prototype.show = function (content, type = 'info') {
	const contentBox = document.createElement('div')
	const contentDom = document.createElement('span')
	const icon = document.createElement('i')
	icon.classList.add(type)
	icon.classList.add('vanilla-antd-message-icon')
	contentDom.innerText = content
	contentBox.classList.add('vanilla-antd-content-box')
	contentBox.classList.add('animate-in')
	contentBox.appendChild(icon)
	contentBox.appendChild(contentDom)
	contentBox.style.top = `${this.count * 50}px`
	antmessage.appendChild(contentBox)

	this.count++

	setTimeout(() => {
		contentBox.classList.add('animate-out')
		setTimeout(() => {
			antmessage.removeChild(contentBox)

			const boxs = document.querySelectorAll('.vanilla-antd-content-box')
			for (let i = 0; i < boxs.length; i++) {
				boxs[i].style.top = `${parseInt(boxs[i].style.top, 10) - 50}px`
			}
			this.count--
		}, 300)
	}, this.duration)
}

Message.prototype.success = function (content) {
	this.show(content, 'success')
}

Message.prototype.error = function (content) {
	this.show(content, 'error')
}

Message.prototype.warn = function (content) {
	this.show(content, 'warn')
}

Message.prototype.info = function (content) {
	this.show(content, 'info')
}

Message.prototype.duration = 3000
Message.prototype.count = 0

export default new Message()
