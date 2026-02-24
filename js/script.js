// Dashboard Count Logic
let interviewList = [];
let rejectedList = [];

let total = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allCardsSection = document.getElementById('allCards');

function calculateCount() {
  total.innerText = allCardsSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

calculateCount();
