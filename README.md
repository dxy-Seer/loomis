# DBOS
### How to setup
Rename config.json.example > config.json
Then fill in these values:
```
{
	"bot": {
		"prefix": "?",
		"token": "BOT TOKEN",
		"secret": "CLIENT SECRET",
		"id": "CLIENT ID",
		"commandLogging": true,
		"messageLogging": true,
		"status": {
			"mode": "dnd",
            "activity": "dbt.help"
		},
		"ver": "0.0.0"
	},
	"server": {
		"invite": "TJY6Xyg"
	},
	  "siteUrl": "SITE URL",
	  "port": "3000",
	  "db": {
		  "mongodb": "MONGODB"
	  },
	  "siteName": "DBOS",
      "owner": "Seer#6054"
}
```
### Console explainations:
ML -> Message Log - Enabled with `"messageLogging": true`
CL -> Command Log - Enabled with `"commandLogging": true`"# dbos" 
