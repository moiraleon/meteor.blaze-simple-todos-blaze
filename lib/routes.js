FlowRouter.route('/',{
    name: 'home',
    action(){
        BlazeLayout.render('App');
    }
}); 

FlowRouter.route('/settings',{
    name: 'home',
    action(){
        BlazeLayout.render('Settings', {mainContainer:'inspirationCards'});
    }
}); 