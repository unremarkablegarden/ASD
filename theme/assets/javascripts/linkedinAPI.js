const url = new URL(window.location.href)
let lang = url.searchParams.get('lang')
if (lang == 'en') { lang = 'en_US' }
else { lang = 'de_DE' }

const linkedIn = {
	api_key: '776uwgke5bsl4t',
	authorize: '7hioLkPdfR0jTsdf',
	rest: 'https://api.linkedin.com/v1/people/~',
	lang: lang,
	jsSrc: '//platform.linkedin.com/in.js'
}


const linkedInJsText = `
	api_key:   ${linkedIn.api_key}
	lang:      ${linkedIn.lang}
`

let linkedInScript = document.createElement('script')
linkedInScript.src = linkedIn.jsSrc
linkedInScript.text = linkedInJsText
document.write(linkedInScript.outerHTML)

$(() => {
	$.ajax({
	  type: 'GET',
	  url: linkedIn.rest,
	  data: {
			format: 'json'
		},
	  dataType: 'json',
	  success: function (data) {
			console.log(data);
	      // $.each(data, function(index, element) {
	      //     console.log(element);
	      // });
	  }
	});
})
