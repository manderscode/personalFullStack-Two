var check = document.getElementsByClassName("fa-check-double");
var trash = document.getElementsByClassName("fa-trash-can");

Array.from(check).forEach(function(element) {
      element.addEventListener('click', function(e){
        e.preventDefault()
        console.log(this.parentNode)
        const name = this.parentNode.parentNode.querySelector(".name").innerText
        const order = this.parentNode.parentNode.querySelector(".order").innerText
        console.log(order,name)

        fetch('submitOrder', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': order,
            'check': check
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
console.log('hello')
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const email = this.parentNode.parentNode.querySelector(".email").innerText
        const name = this.parentNode.parentNode.querySelector(".name").innerText
        const order = this.parentNode.parentNode.querySelector(".order").innerText
        console.log(name,order)
        fetch('submitOrder', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'email': email, //right hand side = variable reference
            'name': name,
            'order': order
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
