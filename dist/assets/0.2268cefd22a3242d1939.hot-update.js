webpackHotUpdate(0,{

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(156); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(156);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Entradas = function (_React$Component) {\n  _inherits(Entradas, _React$Component);\n\n  function Entradas(props) {\n    _classCallCheck(this, Entradas);\n\n    var _this = _possibleConstructorReturn(this, (Entradas.__proto__ || Object.getPrototypeOf(Entradas)).call(this, props));\n\n    _this.state = { value: 'B' };\n    _this.handleChange = _this.handleChange.bind(_this);\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n    return _this;\n  }\n\n  _createClass(Entradas, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      this.setState({ value: event.target.value });\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      alert('Select value is: ' + this.state.value);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: '' },\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Datos de entrada para t\\xFA afd yess'\n        ),\n        _react2.default.createElement(\n          'form',\n          { className: '', action: 'index.html', method: 'post' },\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement(\n              'label',\n              { 'for': '' },\n              'N\\xFAmero de estados (Q):'\n            ),\n            _react2.default.createElement(\n              'select',\n              { className: '', name: '' },\n              _react2.default.createElement(\n                'option',\n                { value: '' },\n                'Seleccione'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '1' },\n                'q0'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '2' },\n                'q1'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '3' },\n                'q2'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '4' },\n                'q3'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '5' },\n                'q4'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '6' },\n                'q5'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '7' },\n                'q6'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '8' },\n                'q7'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '9' },\n                'q8'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '10' },\n                'q9'\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { 'class': 'help-block' },\n              'Help text here.'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement(\n              'label',\n              { 'for': '' },\n              'Elementos del alfabeto (Sigma):'\n            ),\n            _react2.default.createElement(\n              'select',\n              { 'class': '', name: '' },\n              _react2.default.createElement(\n                'option',\n                { value: '' },\n                'Seleccione'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '1' },\n                'a'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '2' },\n                'b'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '3' },\n                'c'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '4' },\n                'd'\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { 'class': 'help-block' },\n              'Help text here.'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Entradas;\n}(_react2.default.Component);\n\nexports.default = Entradas;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(351); if (makeExportsHot(module, __webpack_require__(156))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Entradas.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbnRyYWRhcy5qcz9iMjc0Il0sIm5hbWVzIjpbIkVudHJhZGFzIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJhbGVydCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQUNuQixvQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLG9IQUNWQSxLQURVOztBQUVoQixVQUFLQyxLQUFMLEdBQWEsRUFBQ0MsT0FBTyxHQUFSLEVBQWI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUpnQjtBQUtqQjs7OztpQ0FFWUUsSyxFQUFPO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDTCxPQUFPSSxNQUFNRSxNQUFOLENBQWFOLEtBQXJCLEVBQWQ7QUFDRDs7O2lDQUVZSSxLLEVBQU87QUFDbEJHLFlBQU0sc0JBQXNCLEtBQUtSLEtBQUwsQ0FBV0MsS0FBdkM7QUFDRDs7OzZCQUVPO0FBQ04sYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLEVBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFSTtBQUFBO0FBQUEsWUFBTSxXQUFVLEVBQWhCLEVBQW1CLFFBQU8sWUFBMUIsRUFBdUMsUUFBTyxNQUE5QztBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBTyxPQUFJLEVBQVg7QUFBQTtBQUFBLGFBREY7QUFFSTtBQUFBO0FBQUEsZ0JBQVEsV0FBVSxFQUFsQixFQUFxQixNQUFLLEVBQTFCO0FBQ0U7QUFBQTtBQUFBLGtCQUFRLE9BQU0sRUFBZDtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBRkY7QUFHRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQUhGO0FBSUU7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFKRjtBQUtFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBTEY7QUFNRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQU5GO0FBT0U7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFQRjtBQVFFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBUkY7QUFTRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQVRGO0FBVUU7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFWRjtBQVdFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLElBQWQ7QUFBQTtBQUFBO0FBWEYsYUFGSjtBQWVFO0FBQUE7QUFBQSxnQkFBRyxTQUFNLFlBQVQ7QUFBQTtBQUFBO0FBZkYsV0FERjtBQWtCRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQU8sT0FBSSxFQUFYO0FBQUE7QUFBQSxhQURGO0FBRUk7QUFBQTtBQUFBLGdCQUFRLFNBQU0sRUFBZCxFQUFpQixNQUFLLEVBQXRCO0FBQ0U7QUFBQTtBQUFBLGtCQUFRLE9BQU0sRUFBZDtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBRkY7QUFHRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQUhGO0FBSUU7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFKRjtBQUtFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBO0FBTEYsYUFGSjtBQVNFO0FBQUE7QUFBQSxnQkFBRyxTQUFNLFlBQVQ7QUFBQTtBQUFBO0FBVEY7QUFsQkY7QUFGSixPQURGO0FBbUNEOzs7O0VBcERtQyxnQkFBTVEsUzs7a0JBQXZCWCxRIiwiZmlsZSI6IjM1NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJhZGFzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7dmFsdWU6ICdCJ307XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGFsZXJ0KCdTZWxlY3QgdmFsdWUgaXM6ICcgKyB0aGlzLnN0YXRlLnZhbHVlKTtcbiAgfVxuICBcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGgxPkRhdG9zIGRlIGVudHJhZGEgcGFyYSB0JnVhY3V0ZTsgYWZkIHllc3M8L2gxPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIlwiIGFjdGlvbj1cImluZGV4Lmh0bWxcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPk4mdWFjdXRlO21lcm8gZGUgZXN0YWRvcyAoUSk6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cIlwiIG5hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY2Npb25lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPnEwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPnExPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPnEyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPnEzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPnE0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPnE1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPnE2PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPnE3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOVwiPnE4PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTBcIj5xOTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlbHAtYmxvY2tcIj5IZWxwIHRleHQgaGVyZS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+RWxlbWVudG9zIGRlbCBhbGZhYmV0byAoU2lnbWEpOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cIlwiIG5hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY2Npb25lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPmE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Yjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5jPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPmQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWxwLWJsb2NrXCI+SGVscCB0ZXh0IGhlcmUuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRW50cmFkYXMuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})