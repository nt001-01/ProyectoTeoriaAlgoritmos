webpackHotUpdate(0,{

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(156); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(156);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n__webpack_require__(351);\n//require('styles/bootstrap/dist/css/bootstrap.css');\n//require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');\n\nvar Entradas = function (_React$Component) {\n  _inherits(Entradas, _React$Component);\n\n  function Entradas(props) {\n    _classCallCheck(this, Entradas);\n\n    var _this = _possibleConstructorReturn(this, (Entradas.__proto__ || Object.getPrototypeOf(Entradas)).call(this, props));\n\n    _this.cambiandoEstado = function (event) {\n      console.log('primer valor!' + _this.state.estados);\n      var valor = event.target.value;\n      _this.setState({ estados: event.target.value });\n      console.log('Segundo valor!' + valor);\n      var pagina = _this.state.datos;\n      _this.setState({ datos: pagina + 1 });\n    };\n\n    _this.cambiandoAlfabeto = function (event) {\n      console.log('primer valor!' + _this.state.alfabetos);\n      var valora = event.target.value;\n      _this.setState({ alfabetos: event.target.value });\n      console.log('Segundo valor!' + valora);\n      var pagina = _this.state.page;\n      _this.setState({ page: pagina + 1 });\n      console.log('pagina ' + pagina);\n    };\n\n    _this.state = {\n      datos: 0,\n      estados: '1',\n      alfabetos: '1'\n    };\n    _this.handleChange = _this.cambiandoEstado.bind(_this);\n    _this.handleChange = _this.cambiandoAlfabeto.bind(_this);\n    return _this;\n  }\n\n  _createClass(Entradas, [{\n    key: 'render',\n    value: function render() {\n      var vista = void 0;\n      vista = _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h2',\n          null,\n          'Datos de entrada para t\\xFA afd'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'label',\n            { 'for': '' },\n            'N\\xFAmero de estados (Q):'\n          ),\n          _react2.default.createElement(\n            'select',\n            { value: this.state.estados, onChange: this.cambiandoEstado, className: 'form-control', name: '' },\n            _react2.default.createElement(\n              'option',\n              { value: '1' },\n              'q0'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '2' },\n              'q1'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '3' },\n              'q2'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '4' },\n              'q3'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '5' },\n              'q4'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '6' },\n              'q5'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '7' },\n              'q6'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '8' },\n              'q7'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '9' },\n              'q8'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '10' },\n              'q9'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'label',\n            { 'for': '' },\n            'Elementos del alfabeto (\\u03A3):'\n          ),\n          _react2.default.createElement(\n            'select',\n            { value: this.state.alfabeto, onChange: this.cambiandoAlfabeto, className: 'form-control', name: '' },\n            _react2.default.createElement(\n              'option',\n              { value: '1' },\n              'a'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '2' },\n              'b'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '3' },\n              'c'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '4' },\n              'd'\n            )\n          )\n        )\n      );\n      for (var i = 0; i < this.state.estados; i++) {\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h4',\n            null,\n            'Hola'\n          )\n        );\n      }\n      return _react2.default.createElement(\n        'div',\n        null,\n        vista\n      );\n    }\n  }]);\n\n  return Entradas;\n}(_react2.default.Component);\n\nexports.default = Entradas;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(355); if (makeExportsHot(module, __webpack_require__(156))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Entradas.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbnRyYWRhcy5qcz9iMjc0Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJFbnRyYWRhcyIsInByb3BzIiwiY2FtYmlhbmRvRXN0YWRvIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJlc3RhZG9zIiwidmFsb3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwicGFnaW5hIiwiZGF0b3MiLCJjYW1iaWFuZG9BbGZhYmV0byIsImFsZmFiZXRvcyIsInZhbG9yYSIsInBhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwidmlzdGEiLCJhbGZhYmV0byIsImkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7O0FBSEEsbUJBQUFBLENBQVEsR0FBUjtBQUNBO0FBQ0E7O0lBR3FCQyxROzs7QUFDbkIsb0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSxvSEFDVkEsS0FEVTs7QUFBQSxVQVdsQkMsZUFYa0IsR0FXRixVQUFDQyxLQUFELEVBQVM7QUFDdkJDLGNBQVFDLEdBQVIsQ0FBWSxrQkFBa0IsTUFBS0MsS0FBTCxDQUFXQyxPQUF6QztBQUNBLFVBQUlDLFFBQVFMLE1BQU1NLE1BQU4sQ0FBYUMsS0FBekI7QUFDQSxZQUFLQyxRQUFMLENBQWMsRUFBQ0osU0FBU0osTUFBTU0sTUFBTixDQUFhQyxLQUF2QixFQUFkO0FBQ0FOLGNBQVFDLEdBQVIsQ0FBWSxtQkFBbUJHLEtBQS9CO0FBQ0EsVUFBSUksU0FBUyxNQUFLTixLQUFMLENBQVdPLEtBQXhCO0FBQ0EsWUFBS0YsUUFBTCxDQUFjLEVBQUNFLE9BQU9ELFNBQU8sQ0FBZixFQUFkO0FBQ0QsS0FsQmlCOztBQUFBLFVBb0JsQkUsaUJBcEJrQixHQW9CQSxVQUFDWCxLQUFELEVBQVM7QUFDekJDLGNBQVFDLEdBQVIsQ0FBWSxrQkFBa0IsTUFBS0MsS0FBTCxDQUFXUyxTQUF6QztBQUNBLFVBQUlDLFNBQVNi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cmVxdWlyZSgnbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzJyk7XG4vL3JlcXVpcmUoJ3N0eWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcycpO1xuLy9yZXF1aXJlKCcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyk7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyYWRhcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0b3M6IDAsXG4gICAgICBlc3RhZG9zOiAnMScsXG4gICAgICBhbGZhYmV0b3M6ICcxJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmNhbWJpYW5kb0VzdGFkby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5jYW1iaWFuZG9BbGZhYmV0by5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY2FtYmlhbmRvRXN0YWRvPShldmVudCk9PntcbiAgICBjb25zb2xlLmxvZygncHJpbWVyIHZhbG9yIScgKyB0aGlzLnN0YXRlLmVzdGFkb3MpO1xuICAgIGxldCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtlc3RhZG9zOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICBjb25zb2xlLmxvZygnU2VndW5kbyB2YWxvciEnICsgdmFsb3IpO1xuICAgIHZhciBwYWdpbmEgPSB0aGlzLnN0YXRlLmRhdG9zO1xuICAgIHRoaXMuc2V0U3RhdGUoe2RhdG9zOihwYWdpbmErMSl9KTtcbiAgfVxuXG4gIGNhbWJpYW5kb0FsZmFiZXRvPShldmVudCk9PntcbiAgICBjb25zb2xlLmxvZygncHJpbWVyIHZhbG9yIScgKyB0aGlzLnN0YXRlLmFsZmFiZXRvcyk7XG4gICAgbGV0IHZhbG9yYSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHthbGZhYmV0b3M6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIGNvbnNvbGUubG9nKCdTZWd1bmRvIHZhbG9yIScgKyB2YWxvcmEpO1xuICAgIHZhciBwYWdpbmEgPSB0aGlzLnN0YXRlLnBhZ2U7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFnZToocGFnaW5hKzEpfSk7XG4gICAgY29uc29sZS5sb2coJ3BhZ2luYSAnICsgcGFnaW5hKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGxldCB2aXN0YTtcbiAgICAgIHZpc3RhID0gKDxkaXY+XG4gICAgICAgIDxoMj5EYXRvcyBkZSBlbnRyYWRhIHBhcmEgdCZ1YWN1dGU7IGFmZDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5OJnVhY3V0ZTttZXJvIGRlIGVzdGFkb3MgKFEpOjwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS5lc3RhZG9zfSBvbkNoYW5nZT17dGhpcy5jYW1iaWFuZG9Fc3RhZG99IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+cTA8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+cTE8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+cTI8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+cTM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+cTQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+cTU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI3XCI+cTY8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+cTc8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+cTg8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPnE5PC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+RWxlbWVudG9zIGRlbCBhbGZhYmV0byAoJlNpZ21hOyk6PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLmFsZmFiZXRvfSBvbkNoYW5nZT17dGhpcy5jYW1iaWFuZG9BbGZhYmV0b30gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIlwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5hPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPmI8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Yzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj5kPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5lc3RhZG9zOyBpKyspIHtcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoND5Ib2xhPC9oND5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICB7dmlzdGF9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FbnRyYWRhcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})