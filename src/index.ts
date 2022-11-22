import dayjs from "dayjs"

declare module "dayjs" {
	interface Dayjs {
		monthWeek(): { year: number; month: number; week: number; };
	}
}

enum Days { SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY }

function getFirstMondayDateInMonth(year: number, month: number) {
	const firstThursday = Array.from({ length: 7 }, (_, i) => i + 1).find((i) => {
		const d = new Date(year, month, i)
		if (d.getDay() == Days.THURSDAY) return d.getDate()
	})!
	return firstThursday - 3
}

interface MonthWeek {
	year: number
	month: number
	week: number
}

export function monthWeek(date: Date) {
	const firstMondayDateThisMonth = getFirstMondayDateInMonth(date.getFullYear(), date.getMonth())
	const prev = date.getDate() < firstMondayDateThisMonth // use last month?
	const d = prev ? new Date(date.setMonth(date.getMonth() - 1)) : date

	const year = d.getFullYear()
	const month = d.getMonth() // 0..11 (0 = January)

	const firstMondayDate = prev ? getFirstMondayDateInMonth(d.getFullYear(), d.getMonth()) : firstMondayDateThisMonth
	const daysInMonth = new Date(year, month - 1, 0).getDate()
	const diff = (prev ? daysInMonth : 0) + date.getDate() - firstMondayDate
	const week = parseInt((`${(diff) / 7}`)) + 1

	return { year, month, week }
}

export default (option: any, dayjsClass: any, dayjsFactory: any) => {
	dayjsClass.prototype.monthWeek = function (): MonthWeek {
		return monthWeek(this.toDate())
	}
}
