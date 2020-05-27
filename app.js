$$(document).on('page:init', '.page[data-name="kalkulator"]', function (e) {
        $$('button[id="dodaj"]').on('click', function() {
          var liczba_a = document.getElementById('liczba_a').value;
          var liczba_b = document.getElementById('liczba_b').value;
          var wynik = Number(liczba_a) + Number(liczba_b);
          document.getElementById('wynik').innerHTML += 'Wynik dodawania to: ' + wynik + '<br>';
        });

        $$('button[id="odejmij"]').on('click', function() {
          var liczba_a = document.getElementById('liczba_a').value;
          var liczba_b = document.getElementById('liczba_b').value;
          var wynik = Number(liczba_a) - Number(liczba_b);
          document.getElementById('wynik').innerHTML += 'Wynik odejmowania to: ' + wynik + '<br>';
        });

        $$('button[id="pomnoz"]').on('click', function() {
          var liczba_a = document.getElementById('liczba_a').value;
          var liczba_b = document.getElementById('liczba_b').value;
          var wynik = Number(liczba_a) * Number(liczba_b);
          document.getElementById('wynik').innerHTML += 'Wynik mnożenia to: ' + wynik + '<br>';
        });

        $$('button[id="podziel"]').on('click', function() {
          var liczba_a = document.getElementById('liczba_a').value;
          var liczba_b = document.getElementById('liczba_b').value;
          var wynik = Number(liczba_a) / Number(liczba_b);
          document.getElementById('wynik').innerHTML += 'Wynik dzielenia to: ' + wynik + '<br>';
        });
      })
