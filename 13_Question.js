// How many users have 'ad' as the second tag in their list of tags ?

[
    {
      $match:{
        "tags.1":"ad"
      }
    }
]

// ..

[
    {
      $match:{
        "tags.1":"ad"
      }
    },
    {
      $count:'secondTagAd'
    }
]

