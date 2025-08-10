"use client"

import { AlertTriangle, ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Home() {
  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      window.location.href = "https://google.com"
    }
  }

  const handleReportSite = () => {
    window.open("https://safebrowsing.google.com/safebrowsing/report_phish/", "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6">
        {/* Alerte principale */}
        <Alert className="border-red-200 bg-red-50">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <AlertTitle className="text-red-800 text-xl">Site potentiellement dangereux</AlertTitle>
          <AlertDescription className="text-red-700 mt-2">
            Vous avez cliqué sur une URL suspecte. Ce site pourrait être une tentative d&apos;arnaque.
          </AlertDescription>
        </Alert>

        {/* Actions principales */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Que souhaitez-vous faire ?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={handleGoBack} className="w-full" size="lg">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retourner en sécurité
            </Button>

            <Button onClick={handleReportSite} variant="outline" className="w-full bg-transparent">
              <ExternalLink className="h-4 w-4 mr-2" />
              Signaler ce site
            </Button>
          </CardContent>
        </Card>

        {/* Conseils rapides */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Conseils de sécurité</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Vérifiez toujours l&apos;URL avant de cliquer</li>
              <li>• Tapez directement les adresses des sites importants</li>
              <li>• Méfiez-vous des liens dans les emails suspects</li>
              <li>• Utilisez vos marque-pages pour les sites habituels</li>
            </ul>
          </CardContent>
        </Card>

        {/* Footer simple */}
        <div className="text-center text-sm text-gray-600">
          <p>En cas de doute, contactez votre service informatique</p>
        </div>
      </div>
    </div>
  )
}
