 const setStore = (name, content) => {
	if(!name) return
	if (typeof content !== 'string') {
		content = JSON.stringify(content)
	}
	window.localStorage.setItem(name,content)
}
export default setStore;