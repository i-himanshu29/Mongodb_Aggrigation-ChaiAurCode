// 2.What is the average age of all users ?

  //2.1 group of gender
  // [
  //   {
  //     $group: {
  //       _id: "$gender",
  //     }
  //   }
  // ]

  //2.2 group of age
  // [
  //   {
  //     $group: {
  //       _id: "$age",
  //     }
  //   }
  // ]


  [
    {
      $group: {
        _id: null,
        averageAge: {
          $avg: "$age",
        },
      },
    },
  ]

