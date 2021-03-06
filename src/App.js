import "./styles.css";

export default function App() {
  //
  let One = "He/Him";
  let Two = "She/Hers";
  let Date = "2022";
  let B = "Blue";
  let T = "TikTok";
  let I = "Insta";
  let D = "Dog";
  let C = "Cat";
  //

  let people = [
    {
      firstName: "Mikkail",
      lastname: "Allen",
      pronouns: [One],
      school: "Williamsburg Charter High School",
      gy: [Date],
      fc: [B],
      tori: [T],
      dogcat: [D] //0
    },
    {
      firstName: "Justin",
      lastname: "Apupalo",
      pronouns: [One],
      school: "NYIT",
      gy: "2025",
      fc: [B],
      tori: [I],
      dogcat: "Rooster"
    }, //1
    {
      firstName: "Christopher",
      lastname: "Bonifacio",
      pronouns: [One],
      school: "OCA",
      gy: [Date],
      fc: [B],
      tori: [I], //2
      dogcat: "FISH"
    },
    {
      firstName: "Angel",
      lastname: "Campoverde",
      pronouns: [One],
      school: "Cristo Rey High School",
      gy: [Date],
      fc: "Purple",
      tori: [I], //3
      dogcat: [D]
    },
    {
      firstName: "Mahdiya",
      lastname: "Chowdhury",
      pronouns: [Two],
      school: "TYWLS",
      gy: "2023",
      fc: "Pink",
      tori: [T], //4
      dogcat: [C]
    },
    {
      firstName: "Diego",
      lastname: "Cruz",
      pronouns: [One],
      school: "Macalester",
      gy: "2026",
      FC: "Red",
      tori: "Insta"
    }, //5
    {
      firstName: "Denny",
      lastname: "Fernandez",
      pronouns: [One],
      school: "Williamsburg Charter High School",
      gy: [Date],
      FC: [B],
      tori: [T],
      dogcat: [D]
    }, //8
    {
      firstName: "Athziri",
      lastname: "Garcia",
      pronouns: [Two],
      school: "Cristo Rey",
      gy: [Date],
      FC: [B],
      tori: [I],
      dogcat: [D]
    }, //9
    {
      firstName: "Yasir",
      lastname: "Hirsi",
      pronouns: [One],
      school: "Mather High School",
      gy: [Date],
      FC: ["Red"],
      tori: [I],
      dogcat: [D]
    }, //10
    {
      firstName: "Francelys",
      lastname: "Lomeli",
      pronouns: [Two],
      school: "Lindblom",
      gy: [Date],
      fc: ["Yellow"],
      tori: [T],
      dogcat: [D]
    }, //11
    {
      firstName: "Claudia",
      lastname: "Luna-Marcelino",
      pronouns: [Two],
      school: "P-TECH",
      fc: " ",
      gy: [Date],
      tori: " ",
      dogcat: [C]
    }, //12
    {
      firstName: "Wana",
      lastname: "Marzia",
      pronouns: [Two],
      school: "P-TECH",
      gy: [Date],
      fc: ["Black"],
      tori: " ",
      dogcat: [C]
    }, //13
    {
      firstName: "Lilly",
      lastname: "Minchala",
      pronouns: [Two],
      school: "HHSLT",
      gy: [Date],
      fc: ["Purple"],
      tori: [I],
      dogcat: ["Rat"]
    }, //14
    {
      firstName: "Abdulwahab",
      lastname: "Murshed",
      pronouns: [One],
      school: "Brooklyn College",
      gy: "2025",
      fc: [B],
      tori: [T],
      dogcat: [D]
    }, //15
    {
      firstName: "Abdulwahab",
      lastname: "Murshed",
      pronouns: [One],
      school: "Brooklyn College",
      gy: "2025",
      fc: [B],
      tori: [T],
      dogcat: [D] //16
    },
    {
      firstName: "Andy",
      lastname: "Rincon",
      pronouns: [One],
      school: "Uncommon Leadership Charter HS",
      gy: [Date],
      fc: "Green",
      tori: [I],
      dogcat: [C] //17
    },
    {
      firstName: "Eric",
      lastname: "Salazar",
      pronouns: [One],
      school: "WCHS",
      gy: [Date],
      fc: [B],
      tori: [T],
      dogcat: [C]
    }, //18
    {
      firstName: "Alejandro",
      lastname: "Sanchez",
      pronouns: [One],
      school: "UIC",
      gy: "2025",
      fc: "Black",
      tori: [I],
      dogcat: "Fish"
    }, //19
    {
      firstName: "Itzel",
      lastname: "Sanchez",
      pronouns: [Two],
      school: "Westinghouse",
      gy: [Date],
      fc: "purple",
      tori: [T],
      dogcat: [C]
    }, //20
    {
      firstName: "Anton",
      lastname: "Schuster",
      pronouns: [One],
      school: "Latin School of Chicago ",
      gy: "2023",
      fc: "Orange"
    }, //21
    { firstName: "Angel", lastname: "Smythe", pronouns: [One] }, //22
    {
      firstName: "Imani",
      lastname: "Taylor",
      pronouns: [Two],
      school: "P-tech",
      gy: [Date],
      fc: "Pink",
      tori: [T],
      dogcat: [C]
    }, //23
    {
      firstName: "Issac",
      lastname: "Teoh",
      pronouns: [One],
      school: "Queens Technical HS",
      gy: [Date],
      tori: [I],
      dogcat: [C]
    }, //24
    { firstName: "David", lastname: "Vital", pronouns: [One] }, //25
    {
      firstName: "Desean",
      lastname: "Blackburn",
      pronouns: [One],
      school: "",
      gy: [Date],
      fc: "green",
      tori: [I],
      dogcat: [C]
    }, //26
    {
      firstName: "Chinaza",
      lastname: "Onwukanjo",
      pronouns: [Two],
      school: "Frederick Douglass Academy",
      gy: "2023",
      fc: "Purple",
      tori: "Youtube",
      dogcat: [D]
    } //27
  ];

  let List = people.map(function (person) {
    // console.log("im here");
    // console.log(person);
    // TODO

    return (
      <div>
        <div className="first">
          {person.firstName}&nbsp;{person.lastname}&nbsp;
        </div>
        &nbsp;{person.pronouns}&nbsp;{person.school}&nbsp;{person.gy}&nbsp;
        {person.fc}
        {person.tori}&nbsp;{person.dogcat}
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Codenation Class Roster</h1>
      <h5>FirstName, LastName </h5>
      <h5>
        {" "}
        Pronouns, School, GraduationYear, FavColor, TikTok or Insta, FavPet
      </h5>
      {List}
    </div>
  );
}

// function Person(First, Last, Pronouns, School, GY, FC, TorI, DogCat) {
//   return (
//     <div className="Person">
//       <span class="First">{First}</span>
//       &nbsp;
//       <span class="Last">{Last}</span>
//       &nbsp;
//       <span class="Pronouns">{Pronouns}</span>
//       &nbsp;
//       <span class="School">{School}</span>
//       &nbsp;
//       <span class="Gradution Year">{GY}</span>
//       &nbsp;
//       <span class="Favorite Color">{FC}</span>
//       &nbsp;
//       <span class="Tiktok or Insta">{TorI}</span>
//       &nbsp;
//       <span class="Dogs or Cats">{DogCat}</span>
//     </div>
//   );
// }
