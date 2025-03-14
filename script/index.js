function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

function displayCategories(categories) {
  const categoryContainer = document.getElementById("category-container");

  for (let cat of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button id='btn-${cat.category_id}' onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm  font-bold ">${cat.category}</button>
    
    `;
    categoryContainer.append(categoryDiv);
  }
}

loadCategories();

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => {
      displayVideos(data.videos);
      removeActiveClass();
      const allBtn = document.getElementById("allBtn");
      allBtn.classList.add(`active`);
    });
}

const displayVideos = (videos) => {
  const videosContainer = document.getElementById("videos");
  videosContainer.innerHTML = ``;

  if (videos.length === 0) {
    videosContainer.innerHTML = `
  <div class="flex flex-col justify-center items-center col-span-full">
  <img src="Icon.png" alt="" class="w-[25%]">
    <h1 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h1>
    </div>
    `;
  }

  videos.forEach((video) => {
    const videoDiv = document.createElement("div");
    videoDiv.classList.add("shadow-xl", "rounded-lg");
    videoDiv.innerHTML = `
    <figure class='relative'>
   <img src="${video.thumbnail}" alt="" class="w-full md:h-52 xl:h-68 2xl:h-60 md:w-full rounded-tl-lg rounded-tr-lg" />
   <span class='absolute bottom-1 right-2 rounded-sm bg-black text-white text-[11px] py-1 px-2'>3hrs 56min ago</span>
   </figure>
  <div class='flex mt-6 gap-4 ml-2 mb-10'>
  <img src="${video.authors[0].profile_picture}" alt="" class="w-9 h-9 rounded-full" />
  
<div>
 <h2 class='font-bold text-xl'>${video.title}</h2> 
 <p class='text-[12px] mt-1 mb-1 text-[#17171790] font-semibold'>${video.authors[0].profile_name} - ${video.others.views} views</p>
 
</div> 
    </div>
    
    
    `;
    videosContainer.append(videoDiv);
  });
};

const loadCategoryVideos = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActiveClass();
      const clickedButton = document.getElementById(`btn-${id}`);
      clickedButton.classList.add("active");
      displayVideos(data.category);
    });
};

function removeActiveClass() {
  const allBtn = document.getElementById("allBtn");
  allBtn.classList.remove(`active`);
  const activeButtons = document.getElementsByClassName("active");
  for (let btn of activeButtons) {
    btn.classList.remove("active");
  }
}
