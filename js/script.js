// Dashboard Count Logic
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

let total = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

// All Cards Section
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCardsSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');

function calculateCount() {
  total.innerText = allCardsSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

calculateCount();

// Tab Section Toggling Logic
function toogleStyle(id) {
  allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
  interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
  rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');

  allFilterBtn.classList.add('bg-white', 'text-black');
  interviewFilterBtn.classList.add('bg-white', 'text-black');
  rejectedFilterBtn.classList.add('bg-white', 'text-black');

  const selected = document.getElementById(id);
  currentStatus = id;

  selected.classList.remove('bg-white', 'text-black');
  selected.classList.add('bg-[#3B82F6]', 'text-white');

  if (id == 'interview-filter-btn') {
    allCardsSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderInterview();
  } else if (id == 'all-filter-btn') {
    allCardsSection.classList.remove('hidden');
    filterSection.classList.add('hidden');
  } else if (id == 'rejected-filter-btn') {
    allCardsSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderRejected();
  }
}

// Card Section fucntionality logic

mainContainer.addEventListener('click', function (event) {
  // Interview Card Fucntionality
  if (event.target.classList.contains('interview-btn')) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText;
    const companyRole = parentNode.querySelector('.companyRole').innerText;
    const description = parentNode.querySelector('.description').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const notes = parentNode.querySelector('.notes').innerText;

    parentNode.querySelector('.status').innerText = 'Interview';

    const cardInfo = {
      companyName,
      companyRole,
      description,
      status: 'Interview',
      notes,
    };

    const companyExist = interviewList.find(
      (item) => item.companyName == cardInfo.companyName
    );

    if (!companyExist) {
      interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(
      (item) => item.companyName != cardInfo.companyName
    );

    if (currentStatus == 'rejected-filter-btn') {
      renderInterview();
    }

    calculateCount();
    renderInterview();
  }
  // Rejected Card Fucntionality
  else if (event.target.classList.contains('rejected-btn')) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText;
    const companyRole = parentNode.querySelector('.companyRole').innerText;
    const description = parentNode.querySelector('.description').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const notes = parentNode.querySelector('.notes').innerText;

    parentNode.querySelector('.status').innerText = 'Rejected';

    const cardInfo = {
      companyName,
      companyRole,
      description,
      status: 'Rejected',
      notes,
    };

    const companyExist = rejectedList.find(
      (item) => item.companyName == cardInfo.companyName
    );

    if (!companyExist) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.companyName != cardInfo.companyName
    );

    if (currentStatus == 'interview-filter-btn') {
      renderInterview();
    }

    calculateCount();
  }
});

function renderInterview() {
  filterSection.innerHTML = '';

  for (let interview of interviewList) {
    console.log(interview);
    let div = document.createElement('div');
    div.className = 'card bg-white p-6 rounded-md flex justify-between mb-4';
    div.innerHTML = `
      <!-- Main Part 1 -->
          <div>
            <!-- Part 1 -->
            <div>
              <h3 class="companyName text-xl font-semibold text-[#002C5C] mb-1">
                ${interview.companyName}
              </h3>
              <h4 class="companyRole text-[16px]">${interview.companyRole}</h4>
            </div>
            <!-- Part 2 -->
            <div>
              <p class="description mt-5 mb-2.5">
                ${interview.description}
              </p>
              <p
                class="status mb-1 bg-[#eceff1] text-[#002C5C] py-2 px-3 rounded-md w-[14%] text-[14px] font-medium"
              >
                ${interview.status}
              </p>
              <p class="notes mb-5">
                ${interview.notes}
              </p>
            </div>
            <!-- Part 3 -->
            <div>
              <button
                class="interview-btn border-2 border-[#10B981] text-[#10B981] py-1 px-5 rounded-md mr-2 font-semibold cursor-pointer"
              >
                Interview
              </button>
              <button
                class="rejected-btn border-2 border-[#EF4444] text-[#EF4444] py-1 px-5 rounded-md font-semibold cursor-pointer"
              >
                Rejected
              </button>
            </div>
          </div>
          <!-- Main Part 2 -->
          <div>
            <button class="btn-delete">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
    `;

    filterSection.appendChild(div);
  }
}

function renderRejected() {
  filterSection.innerHTML = '';

  for (let rejected of rejectedList) {
    let div = document.createElement('div');
    div.className = 'card bg-white p-6 rounded-md flex justify-between mb-4';
    div.innerHTML = `
      <!-- Main Part 1 -->
          <div>
            <!-- Part 1 -->
            <div>
              <h3 class="companyName text-xl font-semibold text-[#002C5C] mb-1">
                ${rejected.companyName}
              </h3>
              <h4 class="companyRole text-[16px]">${rejected.companyRole}</h4>
            </div>
            <!-- Part 2 -->
            <div>
              <p class="description mt-5 mb-2.5">
                ${rejected.description}
              </p>
              <p
                class="status mb-1 bg-[#eceff1] text-[#002C5C] py-2 px-3 rounded-md w-[14%] text-[14px] font-medium"
              >
                ${rejected.status}
              </p>
              <p class="notes mb-5">
                ${rejected.notes}
              </p>
            </div>
            <!-- Part 3 -->
            <div>
              <button
                class="interview-btn border-2 border-[#10B981] text-[#10B981] py-1 px-5 rounded-md mr-2 font-semibold cursor-pointer"
              >
                Interview
              </button>
              <button
                class="rejected-btn border-2 border-[#EF4444] text-[#EF4444] py-1 px-5 rounded-md font-semibold cursor-pointer"
              >
                Rejected
              </button>
            </div>
          </div>
          <!-- Main Part 2 -->
          <div>
            <button class="btn-delete">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
    `;

    filterSection.appendChild(div);
  }
}
