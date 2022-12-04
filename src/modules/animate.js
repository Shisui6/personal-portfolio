const animate = () => {
  const top = window.pageYOffset + window.innerHeight;
  const isVisible = top > document.querySelector('#ab-cont').offsetTop;
  const isVisible1 = top > document.querySelector('#skill1').offsetTop;
  const isVisible2 = top > document.querySelector('#skill2').offsetTop;
  const isVisible3 = top > document.querySelector('#skill3').offsetTop;
  const isVisible4 = top > document.querySelector('#skill4').offsetTop;
  const isVisible5 = top > document.querySelector('#profile-img').offsetTop;
  const isVisible6 = top > document.querySelector('#fea').offsetTop;
  const isVisible7 = top > document.querySelector('#fil').offsetTop;
  const isVisible8 = top > document.querySelector('.project').offsetTop;
  const isVisible9 = top > document.querySelector('#get').offsetTop;
  const isVisible10 = top > document.querySelector('#cont').offsetTop;
  const isVisible11 = top > document.querySelector('.detail').offsetTop;
  const isVisible12 = top > document.querySelector('#copyright').offsetTop;
  const isVisible13 = top > document.querySelector('.tou').offsetTop;

  if (isVisible) {
    document.getElementById('ab-cont').classList.add('animate');
  }

  if (isVisible1) {
    document.getElementById('skill1').classList.add('animate');
  }

  if (isVisible2) {
    document.getElementById('skill2').classList.add('animate');
  }

  if (isVisible3) {
    document.getElementById('skill3').classList.add('animate');
  }

  if (isVisible4) {
    document.getElementById('skill4').classList.add('animate');
  }

  if (isVisible5) {
    document.getElementById('profile-img').classList.add('animate');
  }

  if (isVisible6) {
    document.getElementById('fea').classList.add('animate');
  }

  if (isVisible7) {
    document.getElementById('fil').classList.add('animate');
  }

  if (isVisible8) {
    const elem = document.querySelectorAll('.project');
    for (let i = 0; i < elem.length; i += 1) {
      elem[i].classList.add('animate');
    }
  }

  if (isVisible9) {
    document.getElementById('get').classList.add('animate');
  }

  if (isVisible10) {
    document.getElementById('cont').classList.add('animate');
  }

  if (isVisible11) {
    const elem = document.querySelectorAll('.detail');
    for (let i = 0; i < elem.length; i += 1) {
      elem[i].classList.add('animate');
    }
  }

  if (isVisible12) {
    document.getElementById('copyright').classList.add('animate');
  }

  if (isVisible13) {
    const elem = document.querySelectorAll('.tou');
    for (let i = 0; i < elem.length; i += 1) {
      elem[i].classList.add('animate');
    }
  }
};

export default animate;