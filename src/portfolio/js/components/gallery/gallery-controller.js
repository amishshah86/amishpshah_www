var angular = require('angular');
var module = require('./index');

require('slick-carousel');
require('angular-slick');


module
    .controller('GalleryController', [
        '$scope',
        function ($scope){
            $scope.slideControl = {
                showCaption: true
            };

            $scope.galleryData = {
                listreports: [
                    {
                        img: 'assets/preview_pipeline.gif',
                        caption: 'A component of an AngularJS app used internally by producers for auditing data related to real estate marketing materials. This is a multi-section form for editing a house listing report with features that include smart character limit truncation, real-time validation on updates and rapid status tracking.'
                    },
                    {
                        img: 'assets/preview_pipeline.gif',
                        caption: 'A component of an AngularJS app used internally by producers for auditing data related to real estate marketing materials. This is a multi-section form for editing a house listing report with features that include smart character limit truncation, real-time validation on updates and rapid status tracking.'
                    }
                ]
            };
        }
    ])

;
