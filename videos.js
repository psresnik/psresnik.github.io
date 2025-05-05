
// Load in the video data
import videoData from './videodata.js';
console.log(`Loaded ${videoData.length} videos`);

// Lowercase all keywords immediately after loading videoData
videoData.forEach(video => {
    if (Array.isArray(video.keywords)) {
	video.keywords = video.keywords.map(keyword => keyword.toLowerCase());
    }
});

// DOM elements
const videoContainer = document.getElementById('video-container');
const searchInput = document.getElementById('search-input');

// const searchButton = document.getElementById('search-button');
const sortSelect = document.getElementById('sort-select');
const resultCount = document.getElementById('result-count');
const noResults = document.getElementById('no-results');
const commonTags = document.getElementById('common-tags');
const activeTagsContainer = document.getElementById('active-tags');

// Active search tags
let activeTags = [];

// Function to render videos
function renderVideos(videos) {
    videoContainer.innerHTML = '';

    if (videos.length === 0) {
	noResults.style.display = 'block';
    } else {
	noResults.style.display = 'none';
    }

    resultCount.textContent = videos.length;

    videos.forEach(video => {
	const videoElement = document.createElement('div');
	videoElement.className = 'video-item';

	// Create keywords HTML
	const keywordsHtml = video.keywords.map(keyword => 
	    `<span class="keyword" data-keyword="${keyword}">${keyword}</span>`
	).join('');

	videoElement.innerHTML = `
	    <div class="video-header">
		<h2 class="video-title"><a href="${video.url}" target="_blank">${video.title}</a></h2>
		<div class="video-date">${formatDate(video.date)}</div>
	    </div>
	    <div class="video-location">${video.location}</div>
	    <div class="video-keywords">${keywordsHtml}</div>
	    <div class="video-abstract">
		<div class="abstract-content" id="abstract-${video.id}">${video.abstract}</div>
		<span class="read-more" data-id="${video.id}">Read More</span>
	    </div>
	`;

	videoContainer.appendChild(videoElement);
    });

    // Add event listeners to "Read More" buttons
    document.querySelectorAll('.read-more').forEach(button => {
	button.addEventListener('click', function() {
	    const id = this.getAttribute('data-id');
	    const abstract = document.getElementById(`abstract-${id}`);
	    abstract.classList.toggle('expanded');
	    this.textContent = abstract.classList.contains('expanded') ? 'Read Less' : 'Read More';
	});
    });

    // Add event listeners to keywords for easy filtering
    document.querySelectorAll('.keyword').forEach(keyword => {
	keyword.addEventListener('click', function() {
	    const tag = this.getAttribute('data-keyword');
	    if (!activeTags.includes(tag)) {
		activeTags.push(tag);
		updateActiveTagsDisplay();
		filterVideos();
	    }
	});
    });
}

// Format date to be more readable, handling yyyy, yyyy-mm, and yyyy-mm-dd
function formatDate(dateString) {
    if (!dateString) return "Date unknown";

    const parts = dateString.split('-').map(Number);
    let year = parts[0];
    let month = parts[1] ? parts[1] - 1 : 0;  // Default to January if missing
    let day = parts[2] ? parts[2] : 1;        // Default to 1st if missing

    const localDate = new Date(year, month, day);

    if (parts.length === 1) {
	// Only year given
	return year.toString();
    } else if (parts.length === 2) {
	// Year and month
	return localDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long' });
    } else {
	// Full year-month-day
	return localDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    }
}


// Filter videos based on search query and active tags
function filterVideos() {
    const query = searchInput.value.toLowerCase();

    const filteredVideos = videoData.filter(video => {
	// Check if any of the active tags are in the video's keywords
	const matchesTags = activeTags.length === 0 ||
	    video.keywords.some(keyword =>
		activeTags.some(tag =>
		    keyword.includes(tag.toLowerCase())
		)
	    );

	// If no search query and matches tags, include the video
	if (query === '' && matchesTags) {
	    return true;
	}

	// Check if the query matches any of the video's properties
	const matchesTitle = video.title.toLowerCase().includes(query);
	const matchesAbstract = video.abstract.toLowerCase().includes(query);
	const matchesTranscript = (video.transcript ?? "").toLowerCase().includes(query);
	const matchesKeywords = video.keywords.some(keyword => 
	    keyword.includes(query)
	);
	return (matchesTitle || matchesAbstract || matchesTranscript || matchesKeywords) && matchesTags;
    });

    // Sort videos
    sortVideos(filteredVideos);
}

// Helper function
function parseDateSafe(dateStr) {
    const parts = dateStr.split('-').map(Number);
    let year = parts[0];
    let month = parts[1] ? parts[1] - 1 : 0;
    let day = parts[2] ? parts[2] : 1;
    return new Date(year, month, day);
}

// Sort videos based on selected sort option
function sortVideos(videos) {
    const sortOption = sortSelect.value;

    videos.sort((a, b) => {
	const dateA = parseDateSafe(a.date);
	const dateB = parseDateSafe(b.date);

	if (sortOption === 'newest') {
	    return dateB - dateA;
	} else {
	    return dateA - dateB;
	}
    });

    renderVideos(videos);
}

// Update the display of active tags
function updateActiveTagsDisplay() {
    if (activeTags.length === 0) {
	activeTagsContainer.innerHTML = '<em>None</em>';
    } else {
	activeTagsContainer.innerHTML = activeTags.map(tag => 
	    `<span class="tag active">${tag} <span class="remove-tag" data-tag="${tag}">×</span></span>`
	).join(' ');

	// Add event listeners to remove tags
	document.querySelectorAll('.remove-tag').forEach(removeButton => {
	    removeButton.addEventListener('click', function(e) {
		e.stopPropagation();
		const tag = this.getAttribute('data-tag');
		activeTags = activeTags.filter(t => t !== tag);
		updateActiveTagsDisplay();
		filterVideos();
	    });
	});
    }
}

// Initial render
updateActiveTagsDisplay();
sortVideos(videoData.slice());

// Event listeners

// searchButton.addEventListener('click', filterVideos);

searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
	filterVideos();
    }
});

sortSelect.addEventListener('change', function() {
    filterVideos();
});

// Common tags click event
commonTags.addEventListener('click', function(e) {
    if (e.target.classList.contains('tag')) {
	const tag = e.target.getAttribute('data-tag');
	if (!activeTags.includes(tag)) {
	    activeTags.push(tag);
	    updateActiveTagsDisplay();
	    filterVideos();
	}
    }
});

// SEARCH BOX EVENT LISTENER
// Debounced search implementation
let debounceTimeout;

// Debounced event handler
function handleSearchInput() {
  // Clear the previous timeout
  clearTimeout(debounceTimeout);

  // Set a new timeout
  debounceTimeout = setTimeout(() => {
    filterVideos();
  }, 300); // 300ms delay
}

// Add the debounced event listener
searchInput.addEventListener('input', handleSearchInput);

// Also handle the case when search is completely cleared
searchInput.addEventListener('change', function() {
  if (this.value === '') {
    filterVideos(); // Immediately show all videos when cleared completely
  }
});

// Optional: Add a clear button for better UX
function addClearButton() {
  const searchContainer = searchInput.parentElement;
  const clearButton = document.createElement('button');
  clearButton.textContent = '×';
  clearButton.className = 'search-clear-btn';
  clearButton.style.display = 'none';

  searchContainer.style.position = 'relative';
  clearButton.style.position = 'absolute';
  clearButton.style.right = '10px';
  clearButton.style.top = '50%';
  clearButton.style.transform = 'translateY(-50%)';
  clearButton.style.border = 'none';
  clearButton.style.background = 'transparent';
  clearButton.style.cursor = 'pointer';
  clearButton.style.fontSize = '20px';

  clearButton.addEventListener('click', () => {
    searchInput.value = '';
    clearButton.style.display = 'none';
    filterVideos();
    searchInput.focus();
  });

  searchInput.addEventListener('input', () => {
    clearButton.style.display = searchInput.value ? 'block' : 'none';
  });

  searchContainer.appendChild(clearButton);
}

// Call this function if you want the clear button
addClearButton();


document.addEventListener("DOMContentLoaded", function () {
    function populateCommonTags() {
	const tagContainer = document.getElementById("common-tags");

	// Gather all keywords into a single array
	const allKeywords = videoData.flatMap(video => video.keywords);

	// Deduplicate and sort them
	const uniqueSortedKeywords = [...new Set(allKeywords)].sort((a, b) => a.localeCompare(b));

	// Clear existing tags (if any)
	tagContainer.innerHTML = "";

	// Create and append new tag spans
	uniqueSortedKeywords.forEach(keyword => {
	    const span = document.createElement("span");
	    span.className = "tag";
	    span.setAttribute("data-tag", keyword);
	    span.textContent = keyword;
	    tagContainer.appendChild(span);
	});
    }


    populateCommonTags();


    // ✅ Re-attach the click event listener *after* tags have been created
    const commonTags = document.getElementById('common-tags');
    commonTags.addEventListener('click', function(e) {
	if (e.target.classList.contains('tag')) {
	    const tag = e.target.getAttribute('data-tag');
	    if (!activeTags.includes(tag)) {
		activeTags.push(tag);
		updateActiveTagsDisplay();
		filterVideos();
	    }
	}
    });


});



