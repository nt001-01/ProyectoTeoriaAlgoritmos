webpackHotUpdate(0,{

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(156); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(156);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n__webpack_require__(351);\n//require('styles/bootstrap/dist/css/bootstrap.css');\n//require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');\n\nvar Entradas = function (_React$Component) {\n  _inherits(Entradas, _React$Component);\n\n  function Entradas(props) {\n    _classCallCheck(this, Entradas);\n\n    var _this = _possibleConstructorReturn(this, (Entradas.__proto__ || Object.getPrototypeOf(Entradas)).call(this, props));\n\n    _this.state = {\n      estados: '10'\n    };\n    _this.handleChange = _this.cambiandoEstado.bind(_this);\n    _this.handleChange = _this.cambiandoAlfabeto.bind(_this);\n    return _this;\n  }\n\n  _createClass(Entradas, [{\n    key: 'cambiandoEstado',\n    value: function cambiandoEstado(event) {\n      console.log('primer valor!' + this.state.estados);\n      var valor = event.target.value;\n      this.setState({ estados: event.target.value });\n      console.log('Segundo valor!' + valor);\n    }\n  }, {\n    key: 'cambiandoAlfabeto',\n    value: function cambiandoAlfabeto(event) {\n      console.log('primer valor!' + this.state.alfabeto);\n      var valor = event.target.value;\n      this.setState({ alfabeto: event.target.value });\n      console.log('Segundo valor!' + valor);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h2',\n          null,\n          'Datos de entrada para t\\xFA afd'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'label',\n            { 'for': '' },\n            'N\\xFAmero de estados (Q):'\n          ),\n          _react2.default.createElement(\n            'select',\n            { value: this.state.estados, onChange: this.cambiandoEstado, className: 'form-control', name: '' },\n            _react2.default.createElement(\n              'option',\n              { value: '1' },\n              'q0'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '2' },\n              'q1'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '3' },\n              'q2'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '4' },\n              'q3'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '5' },\n              'q4'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '6' },\n              'q5'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '7' },\n              'q6'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '8' },\n              'q7'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '9' },\n              'q8'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '10' },\n              'q9'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'label',\n            { 'for': '' },\n            'Elementos del alfabeto (\\u03A3):'\n          ),\n          _react2.default.createElement(\n            'select',\n            { value: this.state.alfabeto, onChange: this.cambiandoAlfabeto, className: 'form-control', name: '' },\n            _react2.default.createElement(\n              'option',\n              { value: '1' },\n              'a'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '2' },\n              'b'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '3' },\n              'c'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '4' },\n              'd'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Entradas;\n}(_react2.default.Component);\n\nexports.default = Entradas;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(355); if (makeExportsHot(module, __webpack_require__(156))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Entradas.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbnRyYWRhcy5qcz9iMjc0Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJFbnRyYWRhcyIsInByb3BzIiwic3RhdGUiLCJlc3RhZG9zIiwiaGFuZGxlQ2hhbmdlIiwiY2FtYmlhbmRvRXN0YWRvIiwiYmluZCIsImNhbWJpYW5kb0FsZmFiZXRvIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidmFsb3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiYWxmYWJldG8iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7O0FBSEEsbUJBQUFBLENBQVEsR0FBUjtBQUNBO0FBQ0E7O0lBR3FCQyxROzs7QUFDbkIsb0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSxvSEFDVkEsS0FEVTs7QUFFaEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVM7QUFERSxLQUFiO0FBR0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQyxlQUFMLENBQXFCQyxJQUFyQixPQUFwQjtBQUNBLFVBQUtGLFlBQUwsR0FBb0IsTUFBS0csaUJBQUwsQ0FBdUJELElBQXZCLE9BQXBCO0FBTmdCO0FBT2pCOzs7O29DQUVlRSxLLEVBQU07QUFDcEJDLGNBQVFDLEdBQVIsQ0FBWSxrQkFBa0IsS0FBS1IsS0FBTCxDQUFXQyxPQUF6QztBQUNBLFVBQUlRLFFBQVFILE1BQU1JLE1BQU4sQ0FBYUMsS0FBekI7QUFDQSxXQUFLQyxRQUFMLENBQWMsRUFBQ1gsU0FBU0ssTUFBTUksTUFBTixDQUFhQyxLQUF2QixFQUFkO0FBQ0FKLGNBQVFDLEdBQVIsQ0FBWSxtQkFBbUJDLEtBQS9CO0FBQ0Q7OztzQ0FFaUJILEssRUFBTTtBQUN0QkMsY0FBUUMsR0FBUixDQUFZLGtCQUFrQixLQUFLUixLQUFMLENBQVdhLFFBQXpDO0FBQ0EsVUFBSUosUUFBUUgsTUFBTUksTUFBTixDQUFhQyxLQUF6QjtBQUNBLFdBQUtDLFFBQUwsQ0FBYyxFQUFDQyxVQUFVUCxNQUFNSSxNQUFOLENBQWFDLEtBQXhCLEVBQWQ7QUFDQUosY0FBUUMsR0FBUixDQUFZLG1CQUFtQkMsS0FBL0I7QUFDRDs7OzZCQUVPO0FBQ04sYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTyxPQUFJLEVBQVg7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBUSxPQUFPLEtBQUtULEtBQUwsQ0FBV0MsT0FBMUIsRUFBbUMsVUFBVSxLQUFLRSxlQUFsRCxFQUFtRSxXQUFVLGNBQTdFLEVBQTRGLE1BQUssRUFBakc7QUFDRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBSEY7QUFJRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxhQUpGO0FBS0U7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsYUFMRjtBQU1FO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBTkY7QUFPRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxhQVBGO0FBUUU7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsYUFSRjtBQVNFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBVEY7QUFVRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxJQUFkO0FBQUE7QUFBQTtBQVZGO0FBRkYsU0FGRjtBQWlCRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTyxPQUFJLEVBQVg7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBUSxPQUFPLEtBQUtILEtBQUwsQ0FBV2EsUUFBMUIsRUFBb0MsVUFBVSxLQUFLUixpQkFBbkQsRUFBc0UsV0FBVSxjQUFoRixFQUErRixNQUFLLEVBQXBHO0FBQ0U7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxhQUhGO0FBSUU7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUE7QUFKRjtBQUZGO0FBakJGLE9BREY7QUE2QkQ7Ozs7RUF0RG1DLGdCQUFNUyxTOztrQkFBdkJoQixRIiwiZmlsZSI6IjM2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcycpO1xuLy9yZXF1aXJlKCdzdHlsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnKTtcbi8vcmVxdWlyZSgnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcycpO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cmFkYXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVzdGFkb3M6ICcxMCdcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5jYW1iaWFuZG9Fc3RhZG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuY2FtYmlhbmRvQWxmYWJldG8uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNhbWJpYW5kb0VzdGFkbyhldmVudCl7XG4gICAgY29uc29sZS5sb2coJ3ByaW1lciB2YWxvciEnICsgdGhpcy5zdGF0ZS5lc3RhZG9zKTtcbiAgICBsZXQgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXN0YWRvczogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgY29uc29sZS5sb2coJ1NlZ3VuZG8gdmFsb3IhJyArIHZhbG9yKTtcbiAgfVxuXG4gIGNhbWJpYW5kb0FsZmFiZXRvKGV2ZW50KXtcbiAgICBjb25zb2xlLmxvZygncHJpbWVyIHZhbG9yIScgKyB0aGlzLnN0YXRlLmFsZmFiZXRvKTtcbiAgICBsZXQgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YWxmYWJldG86IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIGNvbnNvbGUubG9nKCdTZWd1bmRvIHZhbG9yIScgKyB2YWxvcik7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+RGF0b3MgZGUgZW50cmFkYSBwYXJhIHQmdWFjdXRlOyBhZmQ8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+TiZ1YWN1dGU7bWVybyBkZSBlc3RhZG9zIChRKTo8L2xhYmVsPlxuICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUuZXN0YWRvc30gb25DaGFuZ2U9e3RoaXMuY2FtYmlhbmRvRXN0YWRvfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPnEwPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPnExPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPnEyPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPnEzPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPnE0PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPnE1PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPnE2PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPnE3PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOVwiPnE4PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTBcIj5xOTwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPkVsZW1lbnRvcyBkZWwgYWxmYWJldG8gKCZTaWdtYTspOjwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS5hbGZhYmV0b30gb25DaGFuZ2U9e3RoaXMuY2FtYmlhbmRvQWxmYWJldG99IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+YTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5iPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPmM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+ZDwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0VudHJhZGFzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})