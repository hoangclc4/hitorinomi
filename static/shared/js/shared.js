/*!
 * ScriptName: shared.js
 *
 * FCV - http://foodconnection.jp/
 *
 */

"use strict";

var _BASE_ = "https://www.hitorinomi.jp/members/",
	_URL_ = _BASE_ + "wp-json/hitorinomi/";

$(document)
	.ready(function() {
		if (_URL_.substr(-1) !== "/") _URL_ += "/";

		if ($("#search-result .list").children().length > 0) {
			var _itemPage_ = 20,
				_itemRecommend_ = 0,
				_maxRecommend_ = 10,
				__total__ = $("#search-result .list").children().length,
				$__results = $('<div>').append($("#search-result .list").children().clone()),
				$__recommend = false;

			$("#search-result .list").empty(); // clear

			var _x_ = 0;
			$__results.children().each(function(idx) {
				if ($(this).hasClass("recommend")) {
					_itemRecommend_++;

					if ($("#search-result .recommend").length < 1) $("#search-result .list").append('<div class="recommend"><div class="name">ピックアップ</div></div>');

					$(this).removeClass("recommend");

					if (_x_ < _maxRecommend_) $(this).appendTo("#search-result .recommend");

					_x_++;
				}
			});

			if ($("#search-result .recommend").length > 0) $__recommend = $('<div class="recommend">').append($("#search-result .recommend").children().clone())

			$__results.children().each(function(idx) {
				if (idx >= _itemPage_ - _itemRecommend_) return false;

				$("#search-result .list").append($(this).clone());
			});

			// console.log($__recommend.children());
			// console.log($__results.children().length);

			if ($.fn.pagination) {
				$("#search-result .pagination")
					.pagination("destroy")
					.pagination({
						items: __total__,
						itemsOnPage: _itemPage_,
						prevText: "前",
						nextText: "次",
						onPageClick: function(page, evt) {
							evt.preventDefault();
							evt.stopPropagation();

							$("#search-result .list").stop().slideUp(300, function() {
								var $list = $(this);

								$list.removeAttr("style").hide().empty();

								var _i_ = 0,
									_ii_ = page == 1 ? _itemPage_ - _itemRecommend_ : _itemPage_;

								// _ii_ += 1;

								$__results.children().each(function(idx) {


									if (_i_ >= _ii_ * page) {
										$list.stop().slideDown(300, function() {
											$(this).removeAttr("style");
										});

										return false;
									} else if (page > 0 && _i_ >= _ii_ * (page - 1)) {
										$list.append($(this).clone());
									}

									/*
									var _ii_ = page == 1 ? _itemPage_ - _itemRecommend_ + 1 : _itemPage_;

									if (_i_ >= _ii_ * page - _itemRecommend_) {
										$list.stop().slideDown(300, function() {
											$(this).removeAttr("style");
										});

										return false;
									} else if (page > 0 && _i_ >= _ii_ * (page - 1)) {
										$list.append(_content(data));
									}
									*/

									_i_++;
								});

								if (page == 1 && $__recommend !== false) {
									// $list.prepend('<div class="recommend"><div class="name">ピックアップ</div></div>');
									// $__recommend.each(function(idx, data) {
										// if (idx >= _itemRecommend_) return false;

										// $("#search-result .recommend").append($(this).clone());
									// });

									$list.prepend($__recommend.clone());
								}

								$list.stop().slideDown(300, function() {
									$(this).removeAttr("style");
								});
							});

							$("html, body").stop().animate({
								scrollTop: $("#search-result").offset().top
							}, 300);
						}
					});
			}
		}

		$.ajax({
			url: _URL_ + "fetch",
			dataType: "JSON",
			beforeSend: function() {
				$("#header .search-block").addClass("search-loading");
			},
			success: function(json) {
				var $area = $("#header .search-block[data='area']"),
					$cost = $("#header .search-block[data='cost']"),
					$scene = $("#header .search-block[data='scene']"),
					$category = $("#header .search-block[data='category']");

				$("#header .search-block").removeClass("search-loading");

				if (json.area && Object.keys(json.area).length > 0) {
					$area.addClass("search-loaded");
					$area.find(".search-list ul").empty(); // clear

					$.each(json.area, function(idx, data) {
						$area.find(".search-list > ul").append('<li data="' + data.key + '">' + data.label + '</li>');

						if (data.sub && Object.keys(data.sub).length > 0) {
							var _htmlSub_ = "";

							$.each(data.sub, function(idx, sub) {
								if (sub.key.length > 0 && sub.label.length > 0) _htmlSub_ += '<li data="' + sub.key + '">' + sub.label + '</li>';
							});

							if (_htmlSub_.length > 0) {
								var _html_ = "";
								_html_ += '<li class="sub">';
									_html_ += '<ul>';
										_html_ += _htmlSub_;
									_html_ += '</ul>';
								_html_ += '</li>';
								$area.find(".search-list > ul").append(_html_);
							}
						}
					});

					if ($area.attr("data-selected") && $area.attr("data-selected").length > 0) $area.find(".search-list li[data='" + $area.attr("data-selected") + "']").trigger("click");
				} else $area.addClass("search-error");

				if (json.cost && Object.keys(json.cost).length > 0) {
					$cost.addClass("search-loaded");
					$cost.find(".search-list ul").empty(); // clear

					$.each(json.cost, function(idx, data) {
						$cost.find(".search-list ul").append('<li data="' + data.key + '">' + data.label + '</li>');
					});

					if ($cost.attr("data-selected") && $cost.attr("data-selected").length > 0) $cost.find(".search-list li[data='" + $cost.attr("data-selected") + "']").trigger("click");
				} else $cost.addClass("search-error");

				if (json.scene && Object.keys(json.scene).length > 0) {
					$scene.addClass("search-loaded");
					$scene.find(".search-list ul").empty(); // clear

					$.each(json.scene, function(idx, data) {
						$scene.find(".search-list ul").append('<li data="' + data.key + '">' + data.label + '</li>');
					});

					if ($scene.attr("data-selected") && $scene.attr("data-selected").length > 0) $scene.find(".search-list li[data='" + $scene.attr("data-selected") + "']").trigger("click");
				} else $scene.addClass("search-error");

				if (json.category && Object.keys(json.category).length > 0) {
					$category.addClass("search-loaded");
					$category.find(".search-list ul").empty(); // clear

					$.each(json.category, function(idx, data) {
						$category.find(".search-list ul").append('<li data="' + data.key + '">' + data.label + '</li>');
					});

					if ($category.attr("data-selected") && $category.attr("data-selected").length > 0) $category.find(".search-list li[data='" + $category.attr("data-selected") + "']").trigger("click");
				} else $category.addClass("search-error");

				if (window["_querySearch"]) {
					if (json.list) {
						$("#search-result").stop().slideUp(300, function() {
							$(this).removeAttr("style").removeClass("active");
							$(this).find(".list").empty();
						});
					}

					window._querySearch((json.list ? json.list : null));
				}
			},
			error: function() {
				$("#header .search-block").addClass("search-error").removeClass("search-loading");
			}
		});

		$("#header .search-caption").each(function() {
			$(this).attr("data-text", $.trim($(this).find(".search-name").text()));
		});

		$("body")
			.on("click", "#search-result .pagination a", function(e) {
				e.preventDefault();
			})
			.on("click", "#search-result .pagination .clickable", function(e) {
				e.preventDefault();
				e.stopPropagation();
			})
			.on("click", "#header .search-caption", function(e) {
				e.stopPropagation();

				if ($(this).parents(".search-block").hasClass("search-loaded") && !$(this).parents(".search-block").hasClass("search-loading")) {
					if ($(e.target).hasClass("search-icon") && $(this).hasClass("selected")) {
						$(this).find(".search-name").text($(this).data("text")).removeAttr("data");

						$(this).removeClass("selected");

						$(this).siblings(".search-list").find("li.active").removeClass("active");
					}

					if ($(this).hasClass("active")) {
						$("#header .search-caption").removeClass("active");
						$(this).removeClass("active");
					} else {
						$("#header .search-caption").removeClass("active");
						$(this).addClass("active");
					}
				}
			})
			.on("click", "#header .search-list li", function() {
				if (!$(this).hasClass("sub")) {
					var _data_ = $(this).attr("data"),
						_text_ = $(this).text(),
						$caption = $(this).parents(".search-list").siblings(".search-caption");

					$(this)
						.parents("ul")
							.find("li.active")
							.removeClass("active");

					$(this).addClass("active");

					$caption
						.removeClass("active")
						.addClass("selected")
						.find(".search-name")
							.text(_text_);

					if ($(this).parents(".sub").length > 0) {
						$caption
							.find(".search-name")
							.attr("data", $(this).parents(".sub").prev().attr("data"))
							.attr("data-sub", _data_);
					} else {
						$caption
							.find(".search-name")
								.attr("data", _data_)
								.removeAttr("data-sub");

					}

					/*
					$(this)
						.parents("ul")
							.find("li.active")
							.removeClass("active")
							.end()
						.end()
						.addClass("active")
						.parents(".search-list")
						.siblings(".search-caption")
							.removeClass("active")
							.addClass("selected")
							.find(".search-name")
								.attr("data", _data_)
								.text(_text_);
					*/
				}
			})
			.on("click", "#header .search-button", function(e) {
				e.preventDefault();

				var $this = $(this),
					$area = $("#header .search-block[data='area']"),
					$sub = $("#header .search-block[data='sub']"),
					$category = $("#header .search-block[data='category']"),
					$cost = $("#header .search-block[data='cost']"),
					$scene = $("#header .search-block[data='scene']"),
					_data_ = {
						area: null,
						sub: null,
						category: null,
						cost: null,
						scene: null,
						s: null
					},
					_queries_ = [];

				if (!$this.hasClass("search-loading")) {
					if ($area.find(".search-caption").hasClass("selected")) {
						var $areaName = $area.find(".search-caption").find(".search-name");

						_data_.area = $areaName.attr("data");

						if ($areaName.attr("data-sub")) _data_.sub = $areaName.attr("data-sub");
					}
					if ($category.find(".search-caption").hasClass("selected")) _data_.category = $category.find(".search-caption").find(".search-name").attr("data");
					if ($cost.find(".search-caption").hasClass("selected")) _data_.cost = $cost.find(".search-caption").find(".search-name").attr("data");
					if ($scene.find(".search-caption").hasClass("selected")) _data_.scene = $scene.find(".search-caption").find(".search-name").attr("data");
					if ($.trim($("#header input[name='s-key']").val()).length > 0) _data_.s = $.trim($("#header input[name='s-key']").val());

					if (_data_.area === null && _data_.category === null && _data_.cost === null && _data_.scene === null && _data_.s === null) $("#header input[name='s-key']").focus();
					else {
						if (_data_.s === null) _data_.s = "";

						for (var i in _data_) {
							if (_data_[i] !== null) _queries_.push(i + "=" + encodeURIComponent(_data_[i]));
						}

						if (_queries_.length > 0) {
							// location.href = location.origin + location.pathname.replace(/(.*[^\/])\/(.*[^\?])?(\?.+)?$/i, "$1/search.html") + "?" + _queries_.join("&");
							location.href = _BASE_ + "?" + _queries_.join("&");
						}
					}
				}
			})
			.on("keydown", "#header input[name='s-key']", function(e) {
				var keyCode = e.which ? e.which : e.keyCode;

				if (keyCode == 13) {
					e.preventDefault();

					$("#header .search-button").trigger("click");
				}
			});
	})
	.click(function() {
		$("#header .search-caption").removeClass("active");
	});

function _queries(key) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (decodeURIComponent(pair[0]) == key) return decodeURIComponent(pair[1]);
	}

	return false;
}

$(function () {
	if($("#menu_toggle").hasClass("nav-style01")){
		$('body').removeClass('navOpen');
		$(".navBtn").click(function () {
			if ($('body').hasClass('navOpen')) {
				$('body').addClass('navClose'); 
				$('body').removeClass('navOpen');
			} else {
				$('body').addClass('navOpen');
				$('body').removeClass('navClose'); 
			}
		});

		$(".close_btn,#menu_toggle a").click(function () {
			$('body').removeClass('navOpen');
			$('body').addClass('navClose'); 
			if ($("+div", this).css("display") == "none") {
				$("+div", this).hide();
			}
		});
	}
	else{
		$('body').removeClass('navOpen');
		$(".navBtn").click(function () {
			if ($('body').hasClass('navOpen')) {
				$('body').addClass('navClose'); 
				$('body').removeClass('navOpen');
				$(".menu_toggle").slideToggle();
			} else {
				$('body').addClass('navOpen');
				$('body').removeClass('navClose');
				$(".menu_toggle").slideToggle();
			}
		});

		$(".close_btn,#menu_toggle a").click(function () {
				$('body').removeClass('navOpen');
			$(".menu_toggle").slideToggle();
			if ($("+div", this).css("display") == "none") {
				$("+div", this).hide();
			}
		});
	}
});

		

	$(document).ready(function(){
		$(window).bind('scroll', function () {
			if ($(window).scrollTop() > 47) {
				$('.on-popup').addClass('small');
				$('.off-popup').addClass('small');
			} else {
				$('.on-popup').removeClass('small');
				$('.off-popup').removeClass('small');
			}
		});
	 });

	$( ".off-popup" ).click(function() {
		$( ".on-popup" ).addClass("active");
		$( ".off-popup" ).addClass("active");
	});
	$( ".on-popup" ).click(function() {
		$( ".on-popup" ).removeClass("active");
		$( ".off-popup" ).removeClass("active");
	});