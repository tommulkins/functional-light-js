function getId(obj) {
  console.log(obj.id)
  return obj.id /* ? */
}

getId({
  get id() {
    return Math.floor(Math.random() * 10)
  }
})
