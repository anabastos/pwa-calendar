import requestApi from 'request';

export async function push(){

  let headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": "Basic NjNlMGRjMmUtOGE4Yy00OWJkLWEzMTEtNDEzNTkzOGYzYmYw"
  }

  let options = {
    method: "POST",
    url: 'https://onesignal.com/api/v1/notifications',
    host: "onesignal.com",
    port: 443,
    headers: headers,
    body: {
      app_id: 'b1d59848-65f5-4247-bbe9-e0de7c716178',
      headings: {
        "en": "Proteja-se",
        "br": "Risco de enchente elevado na sua região, vá para um lugar seguro!"
      },
      contents: {
        "en": "Risco de enchente elevado na sua região, vá para um lugar seguro!",
        "br": "Risco de enchente elevado na sua região, vá para um lugar seguro!"
      },
      url: "https://hackathon-nasa.herokuapp.com/",
      ios_attachments: {
        id1: 'https://s30.postimg.org/idxnvxcbl/Whats_App_Image_2017-04-30_at_00.29.40.jpg'
      },
      small_icon: 'https://s30.postimg.org/idxnvxcbl/Whats_App_Image_2017-04-30_at_00.29.40.jpg',
      large_icon: 'https://s30.postimg.org/idxnvxcbl/Whats_App_Image_2017-04-30_at_00.29.40.jpg',
      included_segments: ["All"]
    },
    json: true
  };

  requestApi(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log("notification send");
  })

};