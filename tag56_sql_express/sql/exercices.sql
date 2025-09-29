-- 1. Zeige alle Daten aus der Customers-Tabelle an
SELECT * FROM Customers;

-- 2. Zeige nur die **Spalten CustomerName, City und Country** aus der Customers-Tabelle an.
SELECT CustomerName, City, Country FROM Customers;

-- 3. Zeige alle **Kunden aus Deutschland** an.
SELECT * FROM Customers WHERE Country="Germany";

-- 4. Zeige alle **Kunden** aus **London, UK** an.
SELECT * FROM Customers WHERE Country="UK" AND City="London";

-- 5. Zeige alle **Kunden alphabetisch** nach **CustomerName** sortiert an
SELECT * FROM Customers ORDER BY CustomerName;

-- 6. Zeige nur die **ersten 5 Einträge** der Tabelle Customers an
SELECT * FROM Customers LIMIT 5;
SELECT TOP 5 * FROM Customers;

-- 7. Gib die **Gesamtzahl aller Einträge** in der Customers-Tabelle aus
SELECT COUNT(*) FROM Customers;

-- 8. Zeige **alle Kunden** aus der Customers-Tabelle an, deren **Name mit A beginnt**
SELECT * FROM Customers WHERE CustomerName LIKE "A%";

-- 9. Sortiere die **Kunden absteigend** nach **Postleitzahl** 
SELECT * FROM Customers ORDER BY PostalCode DESC;

-- 10. Zeige alle **Kunden aus Mexico**, **sortiert** zuerst nach **Stadt** und dann nach **Kundenname**
SELECT * FROM Customers WHERE Country="Mexico" ORDER BY City, CustomerName;

-- 11. Zeige  alle Kunden an, die sich in **Deutschland**, dem **Vereinigten Königreich** oder **Frankreich** befinden.
SELECT * FROM Customers WHERE Country IN ("Germany", "UK", "France");


-- Wechsle zur Tabelle Products
-- 1. Zeige alle **Produkte** an, die **in Flaschen** verkauft werden
SELECT * FROM Products WHERE Unit LIKE "%bottles%";

-- 2. Zeige alle Produkte an, deren **Preis** **zwischen 20 und 30 Dollar** liegt
SELECT * FROM Products WHERE Price BETWEEN 20 AND 30;

-- 3. Erstelle eine Liste, die die **Anzahl der Produkte pro Kategorie** anzeigt.
SELECT COUNT(*) FROM Products GROUP BY CategoryID;


-- Tabelle Customers:
-- 1. Zeige alle **Länder** an, die **mehr als fünf Kunden** haben
SELECT Country, COUNT(*) FROM Customers GROUP BY Country HAVING COUNT(*) > 5;

-- Tabelle Orders:
-- 1. Zeige alle **Bestellungen** im **August 1996** an
SELECT * FROM Orders WHERE OrderDate BETWEEN "1996-08-01" AND "1996-08-31";
-- !nur # in w3school
SELECT * FROM Orders WHERE OrderDate BETWEEN #1996-08-01# AND #1996-08-31#;

-- 2. Zeige alle CustomerIds, die **mehr als eine Bestellung** getätigt haben
SELECT CustomerID, COUNT(*) FROM Orders GROUP BY CustomerID HAVING COUNT(*) > 1;

-- 3. Zeige die **CustomerId** mit den **meisten Bestellungen** an
-- Bonus: Zeige direkt den Kundennamen an (nutze JOIN um zwei Tabellenabfragen zu verbinden)
-- ! SELECT CustomerID, COUNT(*) FROM Orders GROUP BY CustomerID ORDER BY ;


-- Tabelle Products:
-- 1. Zeige alle Produkte an, die von der Firma “**Heli Süßwaren GmbH & Co. KG** ” **geliefert** werden
-- !

-- 2. Zeige den **Durchschnittspreis** aller Produkte an
SELECT ROUND(AVG(Price), 2) FROM Products;

-- 3. Zeige den **Höchstpreis** aller Produkte an
SELECT MAX(Price) FROM Products;


-- Tabelle Suppliers:
-- 1. Zeige alle **Lieferanten** an, deren **Telefonnummer** **keine Klammern** () enthält
SELECT * FROM Suppliers WHERE Phone NOT LIKE "%(%";

-- 2. Liste die **Länder** mit der **Anzahl der Lieferanten** auf
-- ,**sortiert** nach der **Anzahl** der Lieferanten in **absteigender** Reihenfolge 
-- und bei gleicher Anzahl von Lieferanten alphabetisch nach Ländernamen.
SELECT Country, COUNT(*) FROM Suppliers 
GROUP BY Country 
ORDER BY COUNT(*) DESC, 
Country ASC