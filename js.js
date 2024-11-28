function showForm(formType) {
    const personalForm = document.getElementById('personalForm');
    const businessForm = document.getElementById('businessForm');
    const personalBtn = document.getElementById('personalBtn');
    const businessBtn = document.getElementById('businessBtn');

    if (formType === 'personal') {
        personalForm.style.display = 'block';
        businessForm.style.display = 'none';
        personalBtn.classList.add('active');
        businessBtn.classList.remove('active');
    } else if (formType === 'business') {
        businessForm.style.display = 'block';
        personalForm.style.display = 'none';
        businessBtn.classList.add('active');
        personalBtn.classList.remove('active');
    }
}
//  d el btn bta3 el browse 
document.getElementById('upload').addEventListener('click',function(){
    document.getElementById('input').click();
})
  document.getElementById('input').addEventListener('change',function(event){
    let files = event.target.files;
  })