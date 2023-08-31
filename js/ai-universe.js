// add all data Link
const allDataLoad = async () =>{
    const responseLink = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const response = await responseLink.json();
    const data = response.data.tools
    console.log(data); // just check all okay Yes Or No

    const allDataId = document.getElementById('all-data-section'); 
    data.forEach(allData => {
        const div = document.createElement('div');
        div.innerHTML =`
        <div class="card bg-base-100 shadow-xl p-5 border border-gray-300 w-full">
        <figure class="pb-2"><img src="${allData.image?allData.image:'img/images.png'}" alt="Shoes" /></figure>
        <div class="">
          <h2 class=" text-titleColor text-2xl font-semibold">Features</h2>
            <ol class="list-decimal list-inside py-2 ">
                <li class="text-lg text-detailColor">${allData.features[0]}</li>
                <li class="text-lg text-detailColor">${allData.features[1]}</li>
                <li class="text-lg text-detailColor">${allData.features[2]}</li>
              </ol> 
              <hr class="my-2">
              <h2 class=" text-titleColor text-2xl font-semibold ">${allData.name}</h2>
              <p class="py-2"><i class="fa-regular fa-calendar-days pr-2"></i> ${allData.published_in} </p>
        </div>
      </div>
        `;
        allDataId.appendChild(div);
    });

};

allDataLoad();