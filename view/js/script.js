function allLetter(inputtxt)
      { 
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      return true;
      }
      else
      {
      alert('Please provide the vaild input');
      return false;
      }
      }

let clickFunc = () => {
  document.getElementsByClassName("loader")[0].style.display = 'revert'
  let inp = document.getElementById("input").value
  console.log("input: ", inp)

  if (!inp.match("^[A-Za-z]+$")) {
    alert('Please provide the valid input')
    //hide loader icon
    document.getElementsByClassName("loader")[0].style.display = 'none'
    return;
  }
  //https://jsonmock.hackerrank.com/api/cities/?city=a
      //example for a search
  let url = `https://jsonmock.hackerrank.com/api/cities/?city=${inp}`
  //https://jsonmock.hackerrank.com/api/cities/?city=a
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      document.getElementsByClassName("loader")[0].style.display = 'none'
      document.getElementById("totalCount").innerText = `Total cities found: ${data.data.length}`
      let tbody = document.createElement("tbody")
      document.getElementsByClassName("table")[0].appendChild(tbody)

      let tr
      let state
      for(const item of data.data){
        if(item.state != state){
          state = item.state

          tr = tbody.insertRow()
          let td = document.createElement("td")
          td.innerText = state
          tr.appendChild(td)
        }
        let td = document.createElement("td")
        td.innerText = item.city
        tr.appendChild(td)
      }
    });
}
document.getElementById("button").addEventListener("click", clickFunc)
