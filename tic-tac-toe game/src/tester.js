const tester = (el, currentValue) =>{
    if(el.children[0].children[0].innerHTML === currentValue 
      && el.children[0].children[1].innerHTML === currentValue
      && el.children[0].children[2].innerHTML === currentValue){
        return true
    }else if(el.children[1].children[0].innerHTML === currentValue 
      && el.children[1].children[1].innerHTML === currentValue
      && el.children[1].children[2].innerHTML === currentValue){
        return true
    }else if(el.children[2].children[0].innerHTML === currentValue 
      && el.children[2].children[1].innerHTML === currentValue
      && el.children[2].children[2].innerHTML === currentValue){
        return true
    }else if(el.children[0].children[0].innerHTML === currentValue 
      && el.children[1].children[0].innerHTML === currentValue
      && el.children[2].children[0].innerHTML === currentValue){
        return true
    }else if(el.children[0].children[1].innerHTML === currentValue 
      && el.children[1].children[1].innerHTML === currentValue
      && el.children[2].children[1].innerHTML === currentValue){
        return true
    }else if(el.children[0].children[2].innerHTML === currentValue 
      && el.children[1].children[2].innerHTML === currentValue
      && el.children[2].children[2].innerHTML === currentValue){
        return true
    }else if(el.children[0].children[0].innerHTML === currentValue 
      && el.children[1].children[1].innerHTML === currentValue
      && el.children[2].children[2].innerHTML === currentValue){
        return true
    }else if(el.children[0].children[2].innerHTML === currentValue 
      && el.children[1].children[1].innerHTML === currentValue
      && el.children[2].children[0].innerHTML === currentValue){
        return true
    }
    
  }
  export default tester