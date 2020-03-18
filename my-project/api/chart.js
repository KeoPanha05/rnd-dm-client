const range = (start, end) => new Array(end - start).fill(start).map((el, i) => start + i);

const shortMonth = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
const monthVisitData = shortMonth.map(m => {
  return {
    'month': m,
    'Unique Visit': Math.floor(Math.random() * 1000) + 200,
    'Page View': Math.floor(Math.random() * 1000) + 250,
  };
});

const campaignData = [
  {
    value: 335,
    name: 'Website'
  },
  {
    value: 310,
    name: 'Email'
  },
  {
    value: 234,
    name: 'Ads'
  },
  {
    value: 135,
    name: 'Video'
  },
  {
    value: 1548,
    name: 'Search'
  }
];
const locationData = [
  {
    value: 50,
    name: 'China'
  },
  {
    value: 35,
    name: 'USA'
  },
  {
    value: 25,
    name: 'EU'
  },
  {
    value: 10,
    name: 'Russia'
  },
  {
    value: 10,
    name: 'Other'
  }
];

const StackMainData = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
const StackData = StackMainData.map((item, key) => {
  return {
    'label': key + 'D',
    'max': 500,
    'sales': item,
  };
});



// for Admin Chart
const AdminStackMainData = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
const AdminStackData = AdminStackMainData.map((item, key) => {
  return {
<<<<<<< HEAD
    'label': key + 'D',
=======
    'label': key + 'Day',
>>>>>>> aacfb46f39629aba679afad3a060ddc1755406f5
    'max': 500,
    'sales': item,
  };
});
// for Admin Chart
const UserStackMainData = [241, 363, 200, 169, 107, 125, 216, 139, 293, 363, 392, 400, 78, 138, 251, 297, 199, 67, 406, 109];
const UserStackData = UserStackMainData.map((item, key) => {
  return {
    'label': key + 'D',
    'max': 500,
    'sales': item,
  };
});



const SinData = range(1, 12).map(i => {
  return {
    'cate': 'Cat' + i,
    'value': ((Math.sin(i / 5) * (i / 5 - 0.1) + i / 6) * 5)
  };
});


export {
  monthVisitData,
  campaignData,
  locationData,
  StackData,
  SinData,

  AdminStackData,
  UserStackData
};