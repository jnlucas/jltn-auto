/**
 * @autor João Lucas
 * Plugin para autocomplete similar ao select2, atendendo somente campos do tipo input
 * @data 2017-03-14
 * Somente jQuery-2.1.4.min.js ou superior
 * 
 * 
 */


var ajaxSelect = {
    min : 5,
    url : '',
    params : '',

    init : function(classElement) {
        ajaxSelect.selecting();

        $('.'+classElement).each(function() {
            var element = $(this);
            var oldValue = element.val();
            var parent = element.parent();

            ajaxSelect.insertDiv(parent, oldValue, element);

            ajaxSelect.url = element.attr('data-url');
            $(element).keyup(function(e) {

                //para baixo
                if (e.keyCode == 40) {

                    ajaxSelect.moveListDow(parent);

                }
                // para cima
                if (e.keyCode == 38) {
                    ajaxSelect.moveListUp(parent);
                }
                // enter
                if (e.keyCode == 13) {
                    ajaxSelect.enter(parent);
                }

                ajaxSelect.keyUp(element, parent);
            });
        });
    },
    moveListDow : function(parent) {
    },
    moveListUp : function(parent) {
    },
    enter : function(parent) {

    },

    keyUp : function(element, parent) {
        if (element.val().length >= ajaxSelect.min) {

            parent.find('.divSelect').css('display', 'block');

            ajaxSelect.ajax(element.val(), parent,element);
        } else {
            parent.find('.divSelect').css('display', 'none');
        }

    },
    insertDiv : function(parent, oldValue, element) {
        var rand = Math.floor((Math.random() * 10) + 5);

        var div = '<span class="divSelect div' + rand + '"></span>';
        parent.append(div);
        ajaxSelect.outFocus(oldValue, element, parent);
    },
    ajax : function(value, parent,element) {
        $.ajax({
            method : "POST",
            url : element.attr('data-url'),
            data : {
                params : ajaxSelect.params,
                value : value
            }
        }).done(function(retorno) {
            ajaxSelect.listRetorno(retorno, parent);

        });

    },
    listRetorno : function(retorno, parent) {
        var divResp = parent.find('.divSelect');
        divResp.html('');
        divResp.append('<ul class="listRetorno"></ul>');
        var ulResp = divResp.find('.listRetorno');
        ulResp.html('');
        retorno = $.parseJSON(retorno);
        $.each(retorno, function(index, data) {
            ulResp.append('<li class="list-value" data-value="' + data.id + '">' + data.name + '</li>');
        });

    },
    selecting : function() {
        $('body').on('click', '.list-value', function() {
            var input = $(this).parent().parent().parent().find('input');
            $(input).val($(this).attr('data-value'));
            $(this).parent().parent().parent().find('.divSelect').css('display', 'none');
        });

    },
    outFocus : function(oldValue, element, parent) {
        var divList = parent.find('.divSelect');
        var ulList = divList.find('.listRetorno');
        $(divList).on('mouseleave', function() {
            var li = divList.find('.list-value');
            var liberado = 0;
            $(li).each(function(index, data) {
                if ($(data).attr('data-value') == element.val()) {
                    liberado = 1;
                }
            });
            if (liberado == 0) {
                element.val('');
            }
        });
    }
};
