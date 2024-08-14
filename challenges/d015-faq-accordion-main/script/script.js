document.getElementById("plusBtnOne").addEventListener("click", function () {
  const btn = document.getElementById("pOne")
  const img = document.getElementById("image1")

  if (btn.style.display === "none" && img.src.endsWith('assets/images/icon-plus.svg')) {
    img.src = 'assets/images/icon-minus.svg'
    btn.style.display = 'block'
  } else {
    img.src = 'assets/images/icon-plus.svg'
    btn.style.display = "none"
  }
});

document.getElementById("plusBtnTwo").addEventListener("click", function () {
    const btn = document.getElementById("pTwo")
    const img = document.getElementById("image2")
  
    if (btn.style.display === "none" && img.src.endsWith('assets/images/icon-plus.svg')) {
      img.src = 'assets/images/icon-minus.svg'
      btn.style.display = 'block'
    } else {
      img.src = 'assets/images/icon-plus.svg'
      btn.style.display = "none"
    }
  });

  document.getElementById("plusBtnThree").addEventListener("click", function () {
    const btn = document.getElementById("pThree")
    const img = document.getElementById("image3")
  
    if (btn.style.display === "none" && img.src.endsWith('assets/images/icon-plus.svg')) {
      img.src = 'assets/images/icon-minus.svg'
      btn.style.display = 'block'
    } else {
      img.src = 'assets/images/icon-plus.svg'
      btn.style.display = "none"
    }
  });

  document.getElementById("plusBtnFour").addEventListener("click", function () {
    const btn = document.getElementById("pFour")
    const img = document.getElementById("image4")
  
    if (btn.style.display === "none" && img.src.endsWith('assets/images/icon-plus.svg')) {
      img.src = 'assets/images/icon-minus.svg'
      btn.style.display = 'block'
    } else {
      img.src = 'assets/images/icon-plus.svg'
      btn.style.display = "none"
    }
  });


  

  

