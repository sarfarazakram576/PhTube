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
    <button class="btn btn-sm btn-accent font-bold">${cat.category}</button>
 
 `;
    categoryContainer.append(categoryDiv);
  }
}

loadCategories();

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
}

const displayVideos = (videos) => {
  videos.forEach((video) => {
    const videosContainer = document.getElementById("videos");
    const videoDiv = document.createElement("div");
    videoDiv.classList.add('shadow-xl', 'rounded-lg')
    videoDiv.innerHTML = `
    <figure class='relative'>
   <img src="${video.thumbnail}" alt="" class="w-full md:h-52 xl:h-68 2xl:h-60 md:w-full rounded-tl-lg rounded-tr-lg" />
   <span class='absolute bottom-1 right-2 rounded-sm bg-black text-white text-[11px] py-1 px-2'>3hrs 56min ago</span>
</figure>
  <div class='flex mt-8 gap-4 ml-2 mb-10'>
     <img src="${video.authors[0].profile_picture}" alt="" class="w-9 h-9 rounded-full" />
     
<div>
 <h2 class='font-bold text-xl'>${video.title}</h2> 
 <p class='text-[12px] mt-1 mb-1 text-[#17171790] font-semibold'>${video.authors[0].profile_name} - ${video.others.views} views</p>

</div> 
    </div>
    
    
   `;
    videosContainer.append(videoDiv);
    console.log(video);
  });
};
loadVideos();

// {
//     "category_id": "1003",
//     "video_id": "aaak",
//     "thumbnail": "https://i.ibb.co/ZNggzdm/cake.jpg",
//     "title": "Beyond The Pale",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/MZ2vbXR/jimm.jpg",
//             "profile_name": "Jim Gaffigan",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "2.6K",
//         "posted_date": "15400"
//     },
//     "description": "'Beyond The Pale' by Jim Gaffigan, with 2.6K views, is a comedic gem that explores everyday observations and family life with a light-hearted and witty approach. Jim's humor is accessible and delightful, making this show perfect for anyone who enjoys clean, observational comedy."
// }
