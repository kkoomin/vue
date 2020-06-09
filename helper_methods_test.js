// 1. images 배열안에 있는 정보(height, width)를 곱해 넓이를 구하여 areas 배열에 저장하세요.

const images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 },
];

const areas = [];

images.map((obj) => {
  return areas.push(obj.height * obj.width);
});

// 2. 아래 함수에서 for 를 forEach 로 바꾸세요.
function handlePosts() {
  const posts = [
    { id: 23, title: "Daily JS News" },
    { id: 52, title: "Code Refactor City" },
    { id: 105, title: "The Brightest Ruby" },
  ];

  // for (let i = 0; i < posts.length; i++){
  //     console.log(posts[i])
  // console.log(posts[i].id)
  // console.log(posts[i].title)
  // }

  // forEach
  posts.forEach((post) => {
    console.log(posts[i]);
    console.log(posts[i].id);
    console.log(posts[i].title);
  });
}

handlePosts();

// 3. 숫자가 담긴 배열로 각 숫자들의 제곱근이 들어있는 새로운 배열 roots를 만드세요.
const newNumbers = [4, 9, 16];

const roots = newNumbers.map((num) => Math.sqrt(num));

// 4. 속도(distance/time)를 저장하는 배열 speeds 를 만드세요.
const trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];

const speeds = trips.map((trip) => trip.distance / trip.time);

// 5. numbers 배열중 50보다 큰 값들만 모은 배열 filteredNumbers 을 만드세요.
const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

const filteredNumbers = numbers.filter((num) => num > 50);

// 6. 배열에 담긴 중복된 이름을 {'이름': 수} 형태의 object로 반환하세요. (map)
const names = ["harry", "jason", "tak", "tak", "justin"];

const duplicatedNames = names.filter(
  (name, index) => names.indexOf(name) != index
);

duplicatedNames.map(
  (name) => (name = { [name]: names.filter((n) => n === name).length })
);

const frequency = { harry: 0, jason: 0, tak: 0, justin: 0 };

// 7. people에서 admin 권한을 가진 요소를 찾으세요. (find)
const people = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true },
];

people.find((person) => person.admin);

// 8. accounts에서 잔액이 24,000인 사람을 찾으세요. (find)
const accounts = [
  { name: "justin", balance: 1200 },
  { name: "harry", balance: 50000 },
  { name: "jason", balance: 24000 },
];

accounts.find((account) => account.balance === 24000);

// 9. requests 배열에서 status가 pending인 요청이 있는지 확인하세요. (some)
const requests = [
  { url: "/photos", status: "complete" },
  { url: "/albums", status: "pending" },
  { url: "/users", status: "failed" },
];

requests.some((req) => req.status === "pending");

// 10. users 배열에서 모두가 submmited 인지 여부를 hasSubmitted 에 저장하세요. (every)
const users = [
  { id: 21, submmited: true },
  { id: 33, submmited: false },
  { id: 712, submmited: true },
];

const hasSubmitted = users.every((user) => user.submmited);
