// What is the average number of tags per user?

// show the tags of a single user
// actually values are spread arround
[
    {
        $unwind:"$tags"
    }
]

//avg no. of tags per user

[
    {
      $unwind:"$tags"
    },
    {
      $group:{
        _id:"$_id",
        numberOfTags:{$sum:1}
      }
    },
    {
      $group:{
        _id:null,
        averageNumberOfTags:{$avg:"$numberOfTags"}
      }
    }
]

// Another way.......


[
    {
      $addFields: {
        numberofTags:{
          $size: {$ifNull : ["$tags",[]]}
        }
      }
    },
    {
      $group:{
        _id:null,
        averageNumberOfTags:{$avg:"$numberofTags"}
      }
    }
  ]