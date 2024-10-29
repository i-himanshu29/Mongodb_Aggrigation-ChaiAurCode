// What are the names and age of users who are inactive and have 'velit' as a tag ?

//...
[
    {
      $match:{
        isActive:false,
        tags:"velit",
      }
    }
]

//u can also add age
[
    {
      $match:{
        isActive:false,
        tags:"velit",
        age:20,
      }
    }
]

// ...........

[
    {
      $match: {
        isActive: false,
        tags: "velit",
      },
    },
    {
      $project: {
        name: 1,
        age: 1,
      },
    },
]
