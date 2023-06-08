const gtag=window.gtag;
export function trackEvents(event_category,  event_sub_category, value){
    gtag('event',event_category,{
        event_category:event_sub_category,
        event_label:value,
    })

}
