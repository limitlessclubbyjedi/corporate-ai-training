(() => {
  'use strict';
  const fitPreview = () => document.documentElement.style.setProperty('--page-scale', Math.min(1, Math.max(0.25, (document.documentElement.clientWidth - 24) / (210 * 96 / 25.4))));
  fitPreview(); window.addEventListener('resize', fitPreview);
  const params = new URLSearchParams(location.search);
  const number = (value, min, max, fallback) => {
    if (value === null || String(value).trim() === '') return fallback;
    const n = Number(value);
    return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : fallback;
  };
  const fmt = new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 });
  const set = (name, value) => document.querySelectorAll(`[data-${name}]`).forEach(el => {el.textContent = value;});
  const minutes = number(params.get('minutes'),15,120,30);
  const hourly = number(params.get('hourly'),250,3000,500);
  const headcount = document.getElementById('headcount');
  headcount.value = Math.round(number(params.get('people'),1,100,30));
  function updateScenario() {
    const people = Math.round(number(headcount.value,1,100,30));
    const monthlyHours = people * minutes / 60 * 20;
    const fee = people <= 15 ? 150000 : people <= 30 ? 200000 : null;
    set('people',fmt.format(people));set('minutes',fmt.format(minutes));set('hourly',fmt.format(hourly));
    set('monthly-hours',fmt.format(monthlyHours));set('yearly-hours',fmt.format(monthlyHours*12));
    set('monthly-value',fmt.format(monthlyHours*hourly));set('yearly-value',fmt.format(monthlyHours*hourly*12));
    set('fee',fee ? fmt.format(fee)+' THB' : 'Request a quote');
    set('tier',fee ? `For up to ${people<=15?15:30} people` : 'More than 30 people');
    set('total',fee ? fmt.format(fee)+' THB' : 'Quotation required');
    set('budget-title',fee ? 'Training fee for the proposed headcount' : 'Ask Limitless to confirm scope and cohorts');
    set('budget-note',fee ? 'Excludes VAT and the additional costs below.' : 'Total budget for more than 30 people requires a quotation.');
  }
  headcount.addEventListener('input',updateScenario);
  headcount.addEventListener('change',()=>{headcount.value=Math.round(number(headcount.value,1,100,30));updateScenario();});
  const blank='________________________________';
  for(const id of ['client','department','requester']) {
    const input=document.getElementById(id);
    input.addEventListener('input',()=>set(id,input.value.trim() || blank));
  }
  updateScenario();
  const button=document.getElementById('printBrief'), status=document.getElementById('printStatus');
  async function preparePrint() {
    button.disabled=true;status.textContent='Preparing images and fonts for your PDF…';
    try {
      await Promise.race([Promise.all([document.fonts.ready,...Array.from(document.querySelectorAll('.brief img'),img=>img.decode())]),new Promise((_,reject)=>setTimeout(()=>reject(new Error('timeout')),20000))]);
      if(!document.fonts.check('12px BriefThai') || Array.from(document.querySelectorAll('.brief img')).some(img=>!img.complete||!img.naturalWidth))throw new Error('assets');
      status.textContent='Ready to print · Select A4, 100% scale, and turn off headers and footers.';
      window.print();
    } catch(error) {status.textContent='Some images or fonts have not loaded. Check your connection and try again, or download the sample PDF.';}
    finally {button.disabled=false;}
  }
  button.addEventListener('click',preparePrint);
})();
