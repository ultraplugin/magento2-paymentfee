define(
    [
        'mage/utils/wrapper',
        'ko',
        'Ultraplugin_Paymentfee/js/action/checkout/cart/totals'
    ],
    function (wrapper, ko, totals) {
        'use strict';

        let isLoading = ko.observable(false);

        return function (selectPaymentMethodAction) {
            return wrapper.wrap(selectPaymentMethodAction, function (originalSelectPaymentMethodAction, paymentMethod) {
                originalSelectPaymentMethodAction(paymentMethod);

                let isEnabled = window.checkoutConfig.ultraplugin_paymentfee.isEnabled;
                if (isEnabled && paymentMethod) {
                    totals(isLoading, paymentMethod['method']);
                }
            });
        };
    }
);
