 $(function () {
     $("[data-toggle = 'tooltip']").tooltip();
     $("[data-toggle = 'popover']").popover();
     $('.carousel').carousel({
         interval: 2000
     });

     $("#contacto").on("show.bs.modal", function (e) {
         console.log('el modal contacto se esta mostrando');

         $('#contactobtn').removeClass('btn-outline-success');
         $('#contactobtn').addClass('btn-primary');
         $('#contactobtn').proq('disabled', true);
     });

     $("#contacto").on('show.bs.modal', function (e) {
         console.log('el modal se esta mostrando');
     });

     $("#contacto").on('shown.bs.modal', function (e) {
         console.log('se mostro el modal contacto');
     });

     $("#contacto").on('hide.bs.modal', function (e) {
         console.log('se mostro el modal contacto');
     });

     $("#contacto").on('hidden.bs.modal', function (e) {
         console.log('se mostro el modal contacto');
         $('#contactobtn').proq('disabled', false);
     });

 });