window.addEventListener('contextmenu', (e)=> {
    e.preventDefault();
  });
  const r = () => {
    
  }
  document.onkeydown = function(e)
  {
    if (e.keyCode == 123)
    {
        return false;
    }
  
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))
    {
      return false;
    }
  
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0))
    {
      return false;
    }
  
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
    {
      return false;
    }
  }