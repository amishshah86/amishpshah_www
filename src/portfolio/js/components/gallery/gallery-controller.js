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
                        caption: 'Designed and developed an AngularJS app used internally by producers for auditing real estate listing data to generate marketing materials. This is a multi-section form for editing a listing\'s data with features that include smart character limit truncation, real-time input validation on updates, rapid quality assurance and status tracking.'
                    },
                    {
                        img: 'assets/preview_darkroom.gif',
                        caption: 'Built an AngularJS app for asset management. It allows re-arrangement and multiple file uploads on drag and drop to enable quick image gallery edits. Users can tag and enhance images using preset templates with text layers and add them to the gallery. Updates are autosaved.'
                    },
                    {
                        img: 'assets/preview_offer_page.gif',
                        caption: 'Created an offer website template for a user to send out to potential partners. The page showcases the entire product suite and has a responsive layout optimized for viewing across any handheld or desktop device.'
                    },
                    {
                        img: 'assets/preview_templates.png',
                        caption: 'Set up several html templates used to generate the core product. Pages can be rendered based on the target media (print/screen) and custom color palettes passed as URL query parameters.'
                    }
                ],

                tvplus: [
                    {
                        img: 'assets/preview_pet1.png',
                        caption: 'Worked on the first iteration of the internal web CMS called PET (Parallel Editing Tool). This was built using vanilla JS and jQuery tied to a Python Tornado back-end. All administration and production work for TVplus would be performed in PET including live publishing of templatized HTML content spots (e.g. polls, galleries, quizzes and factoids) to all connected mobile and tablet apps.'
                    },
                    {
                        img: 'assets/preview_studio1.png',
                        caption: 'Login Page: Built the second iteration of the internal web CMS as an AngularJS app. It was developed as a white label product and third party content producers from client TV networks curated and published HTML spots to devices synced to the episode playing on air. This version of the CMS allowed for a lot of custom client features by referencing individual configuration files.'
                    },
                    {
                        img: 'assets/preview_studio2.png',
                        caption: 'App View: The main dashboard page with all relevant TV show buckets for a particular client with related episodes.'
                    },
                    {
                        img: 'assets/preview_studio3.png',
                        caption: 'Track Listing Mode: A list view for all spots created for a particular episode. Spots could be queued at offsets through the episode duration in advance or pushed out live based on the nature of the broadcast.'
                    },
                    {
                        img: 'assets/preview_studio4.png',
                        caption: 'Spot Editor Mode: A live preview pane would open up to enable users to produce spots and look up third party APIs (iTunes, Google Maps, Amazon, YouTube, Twitter etc) to curate and publish content relevant to that instant in the broadcast.'
                    },
                    {
                        img: 'assets/preview_epix.png',
                        caption: 'Screenshot of the iPad App for The Secret Policeman\'s Ball, a live event organized by the EPIX network. Each of the spots in the bottom row were generated through PET and finally rendered as jpgs using HTML templates optimized for dynamic layouts and font sizing based on content length.'
                    },
                    {
                        img: 'assets/preview_sharkweek.png',
                        caption: 'Screenshot of the iPad App for Discovery Channel\'s Sharkweek. Each of the spots in the bottom row were generated through PET and finally rendered as jpgs using HTML templates.'
                    },
                    {
                        img: 'assets/preview_usarmy.jpg',
                        caption: 'Screenshot of the iPad App for the Discovery Channel. Touching a spot would spawn a modal with an interactive HTML microsite to let users cast votes, browse galleries or stream behind the scenes videos within a native webview in the app.'
                    }

                ],

                freelance: [
                    {
                        img: 'assets/preview_theinkpot.png',
                        caption: 'Developed the company portfolio website for The Ink Pot, a bespoke publishing and design firm based in Mumbai, India',
                        url: 'http://www.theinkpot.in'
                    },
                    {
                        img: 'assets/preview_stanleyproductions.png',
                        caption: 'Designed and developed the portfolio website for an independent film professional, Stanley Productions, based in Glendale, CA.',
                        url: 'http://www.stanleyprod.com'
                    },
                    {
                        img: 'assets/preview_thegarden.png',
                        caption: 'Designed the HUD menu art and built the website for The Garden Of Life, an XBOX game made by a group of students at USC\'s GamePipe Lab. This was a simple static website with some flash components.',
                        url: 'http://www.amishpshah.com/thegarden/'
                    },
                    {
                        img: 'assets/preview_staginghope.png',
                        caption: 'Designed the poster, press kit and film festival invite templates for \'After Kony: Staging Hope\', a documentary film produced by Voices in Harmony, Katy S. Fox and Melissa Fitzgerald.'
                    }
                ]
            };
        }
    ])

;
