# dayjs-monthweek

Gets the week of the month.

## Usage

```
$ npm install dayjs-monthweek
```

```javascript
import dayjs from "dayjs"
import monthWeek from "dayjs-monthweek"

dayjs.extend(monthWeek)
```

### Get the week of the month

```javascript
dayjs(new Date(2023, 0, 1)).monthWeek() // { year: 2022, month: 11, week: 5 }
```
