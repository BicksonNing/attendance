export const districts = [
  { name: "All Districts" },
  { name: "Bishnupur" },
  { name: "Chandel" },
  { name: "Churachanpur" },
  { name: "Imphal East" },
  { name: "Imphal West" },
  { name: "Ukhrul" },
  { name: "Chandel" },
];

export const departments = [
  { name: "All Departments" },
  { name: "Mahud" },
  { name: "Chief Minister Office" },
  { name: "CAF & PD" },
];

export const years = [
  { name: "2022" },
  { name: "2021" },
  { name: "2020" },
  { name: "2019" },
];

export const months = [
  { name: "January" },
  { name: "February" },
  { name: "March" },
  { name: "April" },
];

export const days = [{ name: "3 Days" }, { name: "5 Days" }];

export const permissions = [
  { name: "With permission" },
  { name: "Without permission" },
];

export const hours = [
  { name: "1 hours" },
  { name: "2 hours" },
  { name: "3 hours" },
  { name: "4 hours" },
];

export const mode = [{ name: "Absent" }, { name: "Late" }, { name: "Early" }];
export const range = [
  { name: "Range 1" },
  { name: "Range 2" },
  { name: "Range 3" },
];

export const top10List = [
  {
    name: "Samuel Gonmei",
    department: "GAD",
    districts: "Bishnupur",
    days: "21 days",
    color: "#5DE9BF",
  },
  {
    name: "Tongbram Babhudon",
    department: "GAD",
    districts: "Bishnupur",

    days: "21 days",
    color: "#56B7FA",
  },
  {
    name: "Suraj Kumar",
    department: "GAD",
    districts: "Bishnupur",

    days: "21 days",
    color: "#F0965F",
  },
  {
    name: "Elangbam Kullachand",
    department: "GAD",
    districts: "Bishnupur",

    days: "21 days",
    color: "#AE6BFE",
  },
  {
    name: "Pukhrambam Mocha",
    department: "GAD",
    districts: "Bishnupur",

    days: "21 days",
    color: "#F46646",
  },
];

export const dp = (name) => {
  const str = name;
  let dp = str.split(/\s/).reduce((res, word) => (res += word.slice(0, 1)), "");

  return dp;
};
