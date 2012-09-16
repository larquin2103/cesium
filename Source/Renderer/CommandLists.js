/*global define*/
define(function() {
    "use strict";

    /**
     * Represents lists of commands for drawing for each render pass.
     *
     * @alias CommandLists
     * @constructor
     */
    var CommandLists = function() {
        /**
         * The command list for a color pass.
         * @type Array
         */
        this.colorList = [];

        /**
         * The command list for a pick pass.
         */
        this.pickList = [];
    };

    CommandLists.prototype.empty = function() {
        return this.colorList.length === 0 && this.pickList.length === 0;
    };

    CommandLists.prototype.removeAll = function() {
        this.colorList.length = 0;
        this.pickList.length = 0;
    };

    return CommandLists;
});