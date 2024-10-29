// How many users have a phone number starting with '+1(940)' ?

[
    {
      $match:{
        "company.phone":/^\+1\(940\)/
      }
    },
    {
      $count:'userswithSpecialPhoneNumber'
    }
]

