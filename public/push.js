let webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BOdlX9WthA8j6_7ikjLikh9NyrRAoXeU1APqa_lNFnHtFkpkrnOm8Lrjd6P9zk7H-Eoe593Tlq0TFc8jW7XyXWA",
   "privateKey": "xAhFbGPK1ownirae6YXbz38V3IbTmPrmHjyabd3Os5c"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
let pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/eqkoXNiZ90Y:APA91bEyBfTsvLdHdDvFHGDZcp-efNNzmBhpIQ7p2OU7WYAyL9X5jjOmby1x630QLE30vrjpdCgggriM-shdMq2vBJoTNV6gH-xL9-E6ix4wyZiSfPCaY2Kumil3F6w2yvCZs9K5Pi9T",
   "keys": {
       "p256dh": "BLKH0GLZpGZfOuAIGiFEi8pdbMnUfPP6ydGFHIp7/xhn/C0yjftHIU5Owq6UAugLRYae/8X8vQlUJsjvc307ruw=",
       "auth": "15x02E4Fl3MtzL81lGVEIQ=="
   }
};
let payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
let options = {
   gcmAPIKey: '497298817484',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);