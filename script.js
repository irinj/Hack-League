var SUPABASE_URL = "https://sunpjejrjxldpkdpacor.supabase.co";
var SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1bnBqZWpyanhsZHBrZHBhY29yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE3Mzg4MjAsImV4cCI6MTk4NzMxNDgyMH0.9GyzTiRwXyuuyuvHl1TcCftFUFI-OaqAAt14kDh9HnI";

var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
var token = null;
function setToken(newToken) {
  token = newToken;
}

function signup(event) {
  event.preventDefault();
  var email = event.target[0].value;
  var password = event.target[1].value;
  supabase.auth
    .signUp({ email, password })
    .then((response) => {
      response.error ? alert(response.error.message) : setToken(response);
    })
    .catch((err) => {
      alert(err);
    });
}

function login(event) {
  event.preventDefault();
  var email = event.target[0].value;
  var password = event.target[1].value;
  supabase.auth
    .signUp({ email, password })
    .then((response) => {
      console.log(response);
      debugger;
      if (response.error) {
        alert(response.error.message);
      } else {
        setToken(response);
        window.location.reload();
      }
    })
    .catch((err) => {
      alert(err);
    });
}

function getUser() {
  return supabase.auth.user();
}

function search(event) {
    event.preventDefault();
    const query = event.target[0].value;
    window.location.href = "/search.html?q=" + query;

}