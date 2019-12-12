
export class Config {

    static GOOGLE_API_KEY = 'YOUR_API_KEY';

    static  BOOKING_LINK  = '' ;

    static FACEBOOK_LINK  = 'https://www.facebook.com/'  ;


    static MENU_LIST = [
        { href: '/', label: 'HOME' },
        {
            label: "GROUP", submenus: [
                { href: "/", label: "Sample" },
            ]
        },
       { href: 'https://google.com.au', label: 'EXTERNAL Link', outlink: true },
       
    ];

    static TIME_TABLE = [
        { day: 'Monday', time: ' 8 am – 8 pm' },
        { day: 'Tuesday', time: '8 am – 8 pm' },
        { day: 'Wednesday', time: ' 8 am – 8 pm' },
        { day: 'Thursday ', time: '8 am – 8 pm' },
        { day: 'Friday', time: '8 am – 8 pm' },
        { day: 'Saturday', time: '8 am – 8 pm' },
        { day: 'Sunday', time: 'Closed' },

    ];
    static CONTACT_CARD = {
        address: ' Australia',
        phone: ' ',
        mobile: '',
        email: ''
    }
}


export class DefaultContent {


}