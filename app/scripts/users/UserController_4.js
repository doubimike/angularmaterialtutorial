(function() {

    angular
        .module('users')
        .controller('UserController', [
            'userService', '$mdSidenav', '$mdBottomSheet', '$log',
            UserController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function UserController(userService, $mdSidenav, $mdBottomSheet, $log) {
        var self = this;

        self.selected = null;
        self.users = [];
        self.selectUser = selectUser;
        self.makeContact = makeContact;
        self.toggleList = toggleUsersList;
        /**
         * Hide or Show the 'left' sideNav area
         */
        function toggleUsersList() {
            $mdSidenav('left').toggle();
        }

        // Load all registered users

        userService
            .loadAllUsers()
            .then(function(users) {
                console.log(users)
                self.users = [].concat(users);
                console.log(self.users);
                self.selected = users[0];
            });

        /**
         * Select the current avatars
         * @param menuId
         */
        function selectUser(user) {
            self.selected = user;
        }

        /**
         * Show the bottom sheet
         */
        function makeContact(selectedUser) {

            $mdBottomSheet.show({
                controllerAs: "vm",
                controller: ['$mdBottomSheet', ContactSheetController],
                templateUrl: './scripts/users/view/contactSheet.html',
                parent: angular.element(document.getElementById('content'))
            });

            /**
             * Bottom Sheet controller for the Avatar Actions
             */
            function ContactSheetController($mdBottomSheet) {
                this.user = selectedUser;
                this.items = [
                    { name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg' },
                    { name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg' },
                    { name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg' },
                    { name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg' }
                ];
                this.contactUser = function(action) {
                    // The actually contact process has not been implemented...
                    // so just hide the bottomSheet

                    $mdBottomSheet.hide(action);
                };
            }
        }
    }
})();
